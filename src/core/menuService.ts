import { IMenu } from '../types';
import { menus } from '../telmaMenus';
import chalk from 'chalk';
import { formatMenu } from '../utils';

export class MenuService {
  private readonly _menus: Map<string, IMenu>;

  constructor() {
    this._menus = menus;
  }

  public getMenu(menuId: string): IMenu | undefined {
    return this._menus.get(menuId);
  }

  public formatMenuDisplay(menuId: string): string {
    const menu = this._menus.get(menuId);
    if (!menu) {
      return chalk.red('Menu non trouvé.');
    }

    if (menu.isInputMenu) {
      return this.formatInputMenu(menu);
    }

    return formatMenu(menu.title, menu.options);
  }

  private formatInputMenu(menu: IMenu): string {
    let display = chalk.bold.cyan(menu.title) + '\n';

    const inputType = menu.inputType;
    if (inputType === 'amount') {
      display += chalk.yellow('\nEntrez directement le montant souhaité et appuyez sur Entrée.');
    } else if (inputType === 'pin') {
      display += chalk.yellow('\nEntrez votre code PIN à 4 chiffres et appuyez sur Entrée.');
    } else if (inputType === 'phoneNumber') {
      display += chalk.yellow(
        '\nEntrez le numéro de téléphone (034XXXXXXX ou 038XXXXXXX) et appuyez sur Entrée.'
      );
    }

    display += chalk.dim('\n\nOu choisissez une option:');
    const formattedOptions = formatMenu('', menu.options);
    display += chalk.dim(formattedOptions.split('\n').slice(1).join('\n'));

    return display;
  }
}
