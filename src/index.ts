import * as readline from 'readline';
import chalk from 'chalk';
import { TSessionState } from './types';
import { clearScreen } from './utils';
import { UssdProcessor } from './services/ussdProcessor';
import { MenuService } from './core/menuService';

export async function startUssdService() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const session: TSessionState = {
    currentMenu: 'main',
    history: [],
    data: {},
  };

  const processor = new UssdProcessor(session);
  let isSessionActive = true;

  clearScreen();
  console.log(chalk.green('============================================='));
  console.log(chalk.green('    USSD Service Simulateur - Telma #111*1#  '));
  console.log(chalk.green('============================================='));
  displayCurrentMenu();

  function displayCurrentMenu() {
    if (!isSessionActive) return;

    const menuService = new MenuService();
    const display = menuService.formatMenuDisplay(session.currentMenu);
    console.log(display);
    console.log('\n' + chalk.dim('* Page précédente   ** Menu principal   0 Quitter'));

    askForInput();
  }

  function askForInput() {
    rl.question(chalk.cyan('\nVotre choix: '), async input => {
      const shouldContinue = await processor.processInput(input);
      if (shouldContinue) {
        displayCurrentMenu();
      } else {
        isSessionActive = false;
        rl.close();
      }
    });
  }

  process.on('SIGINT', () => {
    console.log(chalk.yellow('\nArrêt du service USSD...'));
    rl.close();
    process.exit(0);
  });
}

// Démarrer automatiquement
startUssdService();
