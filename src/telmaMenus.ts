import { IMenu } from './types';

export const menus = new Map<string, IMenu>([
  [
    'main',
    {
      id: 'main',
      title: 'Menu Principal Telma',
      options: [
        { id: 'main_1', text: 'Acheter un crédit', nextMenu: 'buy_credit' },
        { id: 'main_2', text: 'Acheter un forfait', nextMenu: 'buy_package' },
        { id: 'main_3', text: 'Transfert MVola', nextMenu: 'mvola_transfer' },
        { id: 'main_4', text: 'Mon compte', nextMenu: 'my_account' },
        { id: 'main_5', text: 'Service client', nextMenu: 'customer_service' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'buy_credit',
    {
      id: 'buy_credit',
      title: 'Achat de crédit Telma',
      options: [
        { id: 'buy_credit_1', text: 'Pour moi', nextMenu: 'credit_for_me' },
        { id: 'buy_credit_2', text: 'Pour un autre numéro', nextMenu: 'credit_for_other' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'credit_for_me',
    {
      id: 'credit_for_me',
      title: 'Achat de crédit pour vous',
      options: [
        { id: 'credit_for_me_submit', text: 'Continuer', nextMenu: 'credit_amount' },
        { id: 'credit_for_me_back', text: 'Retour', nextMenu: 'buy_credit' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'credit_for_other',
    {
      id: 'credit_for_other',
      title: 'Achat de crédit pour un autre numéro',
      inputType: 'phoneNumber',
      options: [
        { id: 'credit_for_other_submit', text: 'Continuer', nextMenu: 'credit_amount' },
        { id: 'credit_for_other_back', text: 'Retour', nextMenu: 'buy_credit' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'credit_amount',
    {
      id: 'credit_amount',
      title: 'Montant du crédit',
      inputType: 'amount',
      options: [
        { id: 'credit_amount_submit', text: 'Continuer', nextMenu: 'credit_confirm' },
        { id: 'credit_amount_back', text: 'Retour', nextMenu: 'buy_credit' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'credit_confirm',
    {
      id: 'credit_confirm',
      title: 'Confirmer votre achat',
      options: [
        {
          id: 'credit_confirm_submit',
          text: 'Confirmer et payer',
          nextMenu: 'credit_pin',
        },
        { id: 'credit_confirm_back', text: 'Annuler', nextMenu: 'main' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'credit_pin',
    {
      id: 'credit_pin',
      title: 'Entrez votre code MVola',
      inputType: 'pin',
      options: [
        {
          id: 'credit_pin_submit',
          text: 'Valider',
          action: () => {
            console.log('Transaction effectuée avec succès');
            console.log('Votre compte MVola a été débité');
            console.log('Votre solde de crédit a été mis à jour');
          },
        },
        { id: 'credit_pin_back', text: 'Annuler', nextMenu: 'main' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'buy_package',
    {
      id: 'buy_package',
      title: 'Forfaits Telma',
      options: [
        { id: 'buy_package_1', text: 'Forfaits MORA', nextMenu: 'mora_packages' },
        { id: 'buy_package_2', text: 'Forfaits First Premium', nextMenu: 'first_packages' },
        { id: 'buy_package_3', text: 'Offres Yellow', nextMenu: 'yellow_packages' },
        { id: 'buy_package_4', text: 'Retour', nextMenu: 'main' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'mora_packages',
    {
      id: 'mora_packages',
      title: 'Forfaits MORA',
      options: [
        { id: 'mora_1', text: 'MORA 500 - 500 Ar', nextMenu: 'package_confirm' },
        { id: 'mora_2', text: 'MORA 1000 - 1000 Ar', nextMenu: 'package_confirm' },
        { id: 'mora_3', text: 'MORA 2000 - 2000 Ar', nextMenu: 'package_confirm' },
        { id: 'mora_4', text: 'MORA 5000 - 5000 Ar', nextMenu: 'package_confirm' },
        { id: 'mora_back', text: 'Retour', nextMenu: 'buy_package' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'first_packages',
    {
      id: 'first_packages',
      title: 'Forfaits First Premium',
      options: [
        { id: 'first_1', text: 'First Premium - 1 jour', nextMenu: 'package_confirm' },
        { id: 'first_2', text: 'First Premium - 7 jours', nextMenu: 'package_confirm' },
        { id: 'first_3', text: 'First Premium - 30 jours', nextMenu: 'package_confirm' },
        { id: 'first_back', text: 'Retour', nextMenu: 'buy_package' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'yellow_packages',
    {
      id: 'yellow_packages',
      title: 'Offres Yellow',
      options: [
        { id: 'yellow_1', text: 'Yellow 1000 - 1000 Ar', nextMenu: 'package_confirm' },
        { id: 'yellow_2', text: 'Yellow 3000 - 3000 Ar', nextMenu: 'package_confirm' },
        { id: 'yellow_3', text: 'Yellow 5000 - 5000 Ar', nextMenu: 'package_confirm' },
        { id: 'yellow_back', text: 'Retour', nextMenu: 'buy_package' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'package_confirm',
    {
      id: 'package_confirm',
      title: 'Confirmation de forfait',
      options: [
        {
          id: 'package_confirm_submit',
          text: 'Confirmer et payer',
          nextMenu: 'package_pin',
        },
        { id: 'package_confirm_back', text: 'Annuler', nextMenu: 'main' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'package_pin',
    {
      id: 'package_pin',
      title: 'Entrez votre code MVola',
      inputType: 'pin',
      options: [
        {
          id: 'package_pin_submit',
          text: 'Valider',
          action: () => {
            console.log('Achat de forfait effectué avec succès');
            console.log('Votre compte MVola a été débité');
            console.log('Votre forfait a été activé');
          },
        },
        { id: 'package_pin_back', text: 'Annuler', nextMenu: 'main' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'mvola_transfer',
    {
      id: 'mvola_transfer',
      title: 'Transfert MVola',
      options: [
        { id: 'mvola_1', text: "Envoyer de l'argent", nextMenu: 'mvola_send' },
        { id: 'mvola_2', text: "Retirer de l'argent", nextMenu: 'mvola_withdraw' },
        { id: 'mvola_3', text: 'Consulter solde', nextMenu: 'mvola_balance' },
        { id: 'mvola_4', text: 'Retour', nextMenu: 'main' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'mvola_send',
    {
      id: 'mvola_send',
      title: "Envoyer de l'argent",
      inputType: 'phoneNumber',
      options: [
        { id: 'mvola_send_submit', text: 'Continuer', nextMenu: 'mvola_amount' },
        { id: 'mvola_send_back', text: 'Retour', nextMenu: 'mvola_transfer' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'mvola_amount',
    {
      id: 'mvola_amount',
      title: 'Montant à envoyer',
      inputType: 'amount',
      options: [
        { id: 'mvola_amount_submit', text: 'Continuer', nextMenu: 'mvola_confirm' },
        { id: 'mvola_amount_back', text: 'Retour', nextMenu: 'mvola_send' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'mvola_confirm',
    {
      id: 'mvola_confirm',
      title: 'Confirmer votre transfert',
      options: [
        {
          id: 'mvola_confirm_submit',
          text: 'Confirmer et envoyer',
          nextMenu: 'mvola_pin',
        },
        { id: 'mvola_confirm_back', text: 'Annuler', nextMenu: 'mvola_transfer' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'mvola_pin',
    {
      id: 'mvola_pin',
      title: 'Entrez votre code MVola',
      inputType: 'pin',
      options: [
        {
          id: 'mvola_pin_submit',
          text: 'Valider',
          action: () => {
            console.log('Transfert effectué avec succès');
            console.log('Votre compte MVola a été débité');
          },
        },
        { id: 'mvola_pin_back', text: 'Annuler', nextMenu: 'mvola_transfer' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'mvola_withdraw',
    {
      id: 'mvola_withdraw',
      title: "Retirer de l'argent",
      options: [
        { id: 'mvola_withdraw_1', text: 'Guichet automatique', nextMenu: 'mvola_atm' },
        { id: 'mvola_withdraw_2', text: 'Agent MVola', nextMenu: 'mvola_agent' },
        { id: 'mvola_withdraw_3', text: 'Retour', nextMenu: 'mvola_transfer' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'mvola_balance',
    {
      id: 'mvola_balance',
      title: 'Consulter solde MVola',
      inputType: 'pin',
      options: [
        {
          id: 'mvola_balance_submit',
          text: 'Vérifier',
          action: () => {
            console.log('Votre solde MVola est de 125 000 Ar');
          },
        },
        { id: 'mvola_balance_back', text: 'Retour', nextMenu: 'mvola_transfer' },
      ],
      isInputMenu: true,
    },
  ],
  [
    'my_account',
    {
      id: 'my_account',
      title: 'Mon compte Telma',
      options: [
        { id: 'account_1', text: 'Consulter solde crédit', nextMenu: 'check_credit' },
        { id: 'account_2', text: 'Consulter forfait actif', nextMenu: 'check_package' },
        { id: 'account_3', text: 'Mes informations', nextMenu: 'my_info' },
        { id: 'account_4', text: 'Retour', nextMenu: 'main' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'check_credit',
    {
      id: 'check_credit',
      title: 'Consultation solde',
      options: [
        {
          id: 'check_credit_submit',
          text: 'Vérifier',
          action: () => {
            console.log('Votre solde crédit est de 2 350 Ar');
          },
        },
        { id: 'check_credit_back', text: 'Retour', nextMenu: 'my_account' },
      ],
      isInputMenu: false,
    },
  ],
  [
    'customer_service',
    {
      id: 'customer_service',
      title: 'Service client Telma',
      options: [
        { id: 'service_1', text: 'Appeler service client', nextMenu: 'call_service' },
        { id: 'service_2', text: 'FAQ', nextMenu: 'faq' },
        { id: 'service_3', text: 'Retour', nextMenu: 'main' },
      ],
      isInputMenu: false,
    },
  ],
]);
