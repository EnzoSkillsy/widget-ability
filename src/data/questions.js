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
                target: 'MODULE_contrat_travail'
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
                target: 'MODULE_contrat_travail'
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
                target: '9',
            },
            {
                reponse: 'Non',
                target: 'MODULE_organisation'
            },
        ]
    },
    10: {
        question: 'Avez-vous mis en place une DUER ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '11',
            },
            {
                reponse: 'Non',
                target: 'MODULE_condition_vie1'
            },
        ]
    },
    11: {
        question: 'Connaissez-vous les risques liés au fait d\'omettre une visite médicale ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '12',
            },
            {
                reponse: 'Non',
                target: 'MODULE_condition_vie1'
            },
        ]
    },
    12: {
        question: 'Savez-vous mettre en œuvre une procédure disciplinaire ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '13',
            },
            {
                reponse: 'Non',
                target: 'MODULE_condition_vie2'
            },
        ]
    },
    13: {
        question: 'Savez-vous mesurer  l\'équibre vie pro/vie perso ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '14',
            },
            {
                reponse: 'Non',
                target: 'MODULE_condition_vie2'
            },
        ]
    },
    14: {
        question: 'Savez-vous lire un bulletin de paie ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '15',
            },
            {
                reponse: 'Non',
                target: 'MODULE_paie_renumeration'
            },
        ]
    },
    15: {
        question: 'Maitriser-vous les dispositifs de rémunération indirecte ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '16',
            },
            {
                reponse: 'Non',
                target: 'MODULE_paie_renumeration'
            },
        ]
    },
    16: {
        question: 'Avez-vous déjà organiser des élections ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '17',
            },
            {
                reponse: 'Non',
                target: 'MODULE_relation_collective'
            },
        ]
    },
    17: {
        question: 'Organiser vous les élections ou réunions obligatoires ? ',
        reponses: [
            {
                reponse: 'Oui',
                target: '18',
            },
            {
                reponse: 'Non',
                target: 'MODULE_relation_collective'
            },
        ]
    },
    18: {
        question: 'Connaissez vous les différents dispositifs de formation ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '19',
            },
            {
                reponse: 'Non',
                target: 'MODULE_developpement_professionnel'
            },
        ]
    },
    19: {
        question: 'Savez-vous mesurer les compétences de vos collaborateurs ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '20',
            },
            {
                reponse: 'Non',
                target: 'MODULE_developpement_professionnel'
            },
        ]
    },
    20: {
        question: 'Savez-vous traiter les différents motifs de départ ?',
        reponses: [
            {
                reponse: 'Oui',
                target: '21',
            },
            {
                reponse: 'Non',
                target: 'MODULE_depart_entreprise'
            },
        ]
    },
}