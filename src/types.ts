export interface IMenuOption {
  id: string;
  text: string;
  action?: () => Promise<void> | void;
  nextMenu?: string;
}

export interface IMenu {
  id: string;
  title: string;
  options: IMenuOption[];
  previousMenu?: string;
  isMainMenu?: boolean;
  isInputMenu?: boolean;
  inputType?: 'amount' | 'pin' | 'phoneNumber';
}

export type TSessionState = {
  currentMenu: string;
  history: string[];
  data: Record<string, unknown>;
};

export interface IUssdService {
  start(): Promise<void>;
  processInput(input: string): Promise<boolean>;
  displayCurrentMenu(): void;
}

export enum MenuType {
  MAIN = 'main',
  ACCOUNT = 'account',
  TRANSFER = 'transfer',
  CREDIT = 'credit',
  WITHDRAWAL = 'withdrawal',
  SETTINGS = 'settings',
  CREDIT_CODE = 'credit_code',
  RECIPIENT = 'recipient',
  SECRET_CODE = 'secret_code',
  TRANSFER_AMOUNT = 'transfer_amount',
  CREDIT_AMOUNT = 'credit_amount',
  CREDIT_NUMBER = 'credit_number',
  CREDIT_PASSWORD = 'credit_password',
  OFFER_TYPE = 'offer_type',
  OFFER_NUMBER = 'offer_number',
  MORA_OPTIONS = 'mora_options',
  PREMIUM_OPTIONS = 'premium_options',
  YELLOW_OPTIONS = 'yellow_options',
  OFFER_PASSWORD = 'offer_password',
}
