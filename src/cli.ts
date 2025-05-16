#!/usr/bin/env node

import { startUssdService } from './index.js';
import chalk from 'chalk';

console.log(chalk.blue('=== Telma USSD Service Simulator ==='));
console.log(chalk.gray('Starting USSD simulator for Telma MVola services...'));
console.log(chalk.yellow('Press Ctrl+C to exit'));
console.log();

startUssdService().catch((error: Error) => {
  console.error(chalk.red('Error starting USSD service:'), error.message);
  process.exit(1);
});
