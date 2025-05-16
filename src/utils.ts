import * as fs from 'fs/promises';
import chalk from 'chalk';

export const formatMenu = (title: string, options: { text: string; id: string }[]): string => {
  const formattedTitle = chalk.bold.cyan(title);
  const formattedOptions = options
    .map((option, index) => chalk.yellow(`${index + 1} ${option.text}`))
    .join('\n');

  return `${formattedTitle}\n${formattedOptions}`;
};

export const saveToFile = async (filename: string, data: string): Promise<void> => {
  try {
    await fs.appendFile(filename, data);
    return Promise.resolve();
  } catch (error) {
    console.error(`Error saving to file ${filename}:`, error);
    return Promise.reject(new Error(`Failed to save to file ${filename}: ${error}`));
  }
};

export const readFromFile = async (filename: string): Promise<string> => {
  try {
    return await fs.readFile(filename, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error);
    return '';
  }
};

export const clearScreen = (): void => {
  process.stdout.write('\x1Bc');
};

export const isValidNumber = (input: string): boolean => {
  return /^\d+$/.test(input);
};
