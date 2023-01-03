export const questions = {
  first: {
    question: 'Connaissez-vous toutes les facettes du métier des RH ?',
    reponses: [
      {
        reponse: 'Oui',
        target: '2',
      },
      {
        reponse: 'Non',
        target: 'MODULE_fondamentaux'
      },
    ]
  },
  2: {
    question: 'Savez-vous quelles sont les responsabilités liées à la fonction RH ?',
    reponses: [
      {
        reponse: 'Oui',
        target: '3',
      },
      {
        reponse: 'Non',
        target: 'MODULE_fondamentaux'
      },
    ]
  },
  3: {
    question: 'Savez-vous maitriser les coûts d\'un recrutement ? ',
    reponses: [
      {
        reponse: 'Oui',
        target: '4',
      },
      {
        reponse: 'Non',
        target: 'MODULE_recrutement'
      },
    ]
  },
  4: {
    question: 'Savez-vous mener un entretien de recrutement ? ',
    reponses: [
      {
        reponse: 'Oui',
        target: '5',
      },
      {
        reponse: 'Non',
        target: 'MODULE_recrutement'
      },
    ]
  },
  5: {
    question: 'Avez-vous mis en place un process d\'intégration ?',
    reponses: [
      {
        reponse: 'Oui',
        target: '6',
      },
      {
        reponse: 'Non',
        target: 'MODULE_integration'
      },
    ]
  },
  6: {
    question: 'Maitrisez-vous les différents contrats de travail ? ',
    reponses: [
      {
        reponse: 'Oui',
        target: '7',
      },
      {
        reponse: 'Non',
        target: 'MODULE_integration'
      },
    ]
  },
  7: {
    question: 'Connaissez-vous les différents modes de gestion de travail ?',
    reponses: [
      {
        reponse: 'Oui',
        target: '8',
      },
      {
        reponse: 'Non',
        target: 'MODULE_organisation'
      },
    ]
  },
  8: {
    question: 'Savez-vous mettre en place le télétravail ?',
    reponses: [
      {
        reponse: 'Oui',
        target: 'END',
      },
      {
        reponse: 'Non',
        target: 'END MODULE_organisation'
      },
    ]
  },
}
