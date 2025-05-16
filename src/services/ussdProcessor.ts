import { TSessionState, IMenu } from '../types';
import { MenuService } from '../core/menuService';
import chalk from 'chalk';
import { clearScreen, isValidNumber } from '../utils';

export enum SelectionStatus {
  CONTINUE = 'continue',
  ERROR = 'error',
  NAVIGATED = 'navigated',
  EXECUTED = 'executed',
  EXIT = 'exit',
}

export class UssdProcessor {
  private readonly _menuService: MenuService;
  private readonly _session: TSessionState;

  constructor(session: TSessionState) {
    this._menuService = new MenuService();
    this._session = session;
  }

  public async processInput(input: string): Promise<boolean> {
    const currentMenu = this._menuService.getMenu(this._session.currentMenu);
    if (!currentMenu) {
      console.log(chalk.red('Menu non trouvé. Retour au menu principal...'));
      this._session.currentMenu = 'main';
      return true;
    }

    if (this._handleNavigationCommands(input)) {
      return true;
    }

    if (input === '0' || input.toLowerCase() === 'exit') {
      // Exit USSD
      console.log(chalk.green("Merci d'avoir utilisé notre service USSD. Au revoir!"));
      process.exit(0);
      return false;
    }

    // Vérifier si le menu actuel est un menu d'entrée directe
    let result;
    if (currentMenu.isInputMenu) {
      result = await this._processDirectInput(input, currentMenu);
    } else {
      result = await this._processMenuSelection(input, currentMenu);
    }

    // Si une action a été exécutée, terminer le processus
    if (result === SelectionStatus.EXECUTED) {
      setTimeout(() => {
        process.exit(0);
      }, 1000);
      return false;
    }

    // Always return true to continue the session except for explicit exit commands
    return true;
  }

  private _handleNavigationCommands(input: string): boolean {
    if (input === '#') {
      console.log(chalk.yellow('Page suivante...'));
      return true;
    }

    if (input === '*') {
      if (this._session.history.length > 0) {
        this._session.currentMenu = this._session.history.pop() ?? 'main';
        clearScreen();
        return true;
      } else {
        console.log(chalk.yellow('Vous êtes déjà au menu principal.'));
      }
      return true;
    }

    if (input === '**') {
      this._session.history = [];
      this._session.currentMenu = 'main';
      clearScreen();
      return true;
    }

    return false;
  }

  private async _processMenuSelection(input: string, currentMenu: IMenu): Promise<SelectionStatus> {
    if (!isValidNumber(input)) {
      console.log(
        chalk.red(
          `Entrée "${input}" invalide. Veuillez entrer un numéro correspondant à une option du menu.`
        )
      );
      return SelectionStatus.ERROR;
    }

    const optionIndex = parseInt(input, 10) - 1;
    const selectedOption = currentMenu.options[optionIndex];

    if (!selectedOption) {
      const maxOption = currentMenu.options.length;
      console.log(
        chalk.red(`Option ${input} invalide. Veuillez choisir un numéro entre 1 et ${maxOption}.`)
      );
      return SelectionStatus.ERROR;
    }

    // Handle menu navigation
    if (selectedOption.nextMenu) {
      this._navigateToMenu(currentMenu.id, selectedOption.nextMenu);
      return SelectionStatus.NAVIGATED;
    }

    // Execute action if available
    if (selectedOption.action) {
      clearScreen();
      await selectedOption.action();
      console.log('\n');
      console.log(chalk.green("Merci d'avoir utilisé notre service USSD. Au revoir!"));
      return SelectionStatus.EXECUTED;
    }

    console.log(
      chalk.red(
        `L'option "${selectedOption.text}" n'a pas d'action définie. Contactez l'administrateur.`
      )
    );
    return SelectionStatus.ERROR;
  }

  private async _processDirectInput(input: string, currentMenu: IMenu): Promise<SelectionStatus> {
    // Valider l'entrée en fonction du type de menu
    const inputType = currentMenu.inputType;

    switch (inputType) {
      case 'amount':
        return this._processAmountInput(input, currentMenu);
      case 'pin':
        return this._processPinInput(input, currentMenu);
      case 'phoneNumber':
        return this._processPhoneNumberInput(input, currentMenu);
      default:
        console.log(chalk.red("Type de menu inconnu. Contactez l'administrateur."));
        return SelectionStatus.ERROR;
    }
  }

  private async _processAmountInput(input: string, currentMenu: IMenu): Promise<SelectionStatus> {
    // Valider que l'entrée est un nombre positif
    const isValid = /^\d+$/.test(input) && parseInt(input, 10) > 0;

    if (!isValid) {
      console.log(chalk.red('Veuillez entrer un montant valide (nombre positif).'));
      return SelectionStatus.ERROR;
    }

    this._session.data['amount'] = parseInt(input, 10);
    console.log(chalk.green(`Montant saisi: ${input} Ar`));

    // Exécuter directement l'action du bouton Continuer/Envoyer
    return this._executeMenuOption(currentMenu, 'submit');
  }

  private async _processPinInput(input: string, currentMenu: IMenu): Promise<SelectionStatus> {
    // Valider que l'entrée est un code PIN à 4 chiffres
    const isValid = /^\d{4}$/.test(input);

    if (!isValid) {
      console.log(chalk.red('Veuillez entrer un code PIN à 4 chiffres.'));
      return SelectionStatus.ERROR;
    }

    this._session.data['pin'] = input;
    console.log(chalk.green('Code PIN accepté'));

    // Exécuter l'action associée au bouton "Valider"
    return this._executeMenuOption(currentMenu, 'submit');
  }

  private async _processPhoneNumberInput(
    input: string,
    currentMenu: IMenu
  ): Promise<SelectionStatus> {
    // Valider que l'entrée est un numéro de téléphone au format 034/038XXXXXXX
    const isValid = /^(03[48])\d{7}$/.test(input);

    if (!isValid) {
      console.log(chalk.red('Veuillez entrer un numéro au format 034XXXXXXX ou 038XXXXXXX.'));
      return SelectionStatus.ERROR;
    }

    this._session.data['phoneNumber'] = input;
    console.log(chalk.green(`Numéro accepté: ${input}`));

    // Naviguer vers le menu suivant
    const nextMenu = currentMenu.options[0]?.nextMenu;
    if (nextMenu) {
      this._navigateToMenu(currentMenu.id, nextMenu);
      return SelectionStatus.NAVIGATED;
    }

    return SelectionStatus.CONTINUE;
  }

  private async _executeMenuOption(
    currentMenu: IMenu,
    optionIdPrefix: string
  ): Promise<SelectionStatus> {
    const submitOption = currentMenu.options.find(opt => opt.id.includes(optionIdPrefix));

    if (submitOption?.action) {
      clearScreen();
      await submitOption.action();
      console.log('\n');
      console.log(chalk.green("Merci d'avoir utilisé notre service USSD. Au revoir!"));
      return SelectionStatus.EXECUTED;
    } else if (submitOption?.nextMenu) {
      this._navigateToMenu(currentMenu.id, submitOption.nextMenu);
      return SelectionStatus.NAVIGATED;
    }

    console.log(chalk.yellow('Entrée acceptée. Veuillez continuer.'));
    return SelectionStatus.CONTINUE;
  }

  private _navigateToMenu(currentMenuId: string, nextMenuId: string): void {
    this._session.history.push(currentMenuId);
    this._session.currentMenu = nextMenuId;
    clearScreen();
  }
}
