export type Question = {
  question: string;
  proposition: string[];
  reponse: string;
}; 

export const questions: Record<number, Question> = {
  1: {
    question: "Quelle est la capitale de l'Algerie ?",
    proposition: ["Annaba", "Alger", "Setif", "Oran"],
    reponse: "Alger",
  },
  2: {
    question: "Combien de continents y a-t-il sur Terre ?",
    proposition: ["5", "6", "7", "8"],
    reponse: "7",
  },
  3: {
    question: "Quel est le plus grand ocean du monde ?",
    proposition: ["Atlantique", "Indien", "Pacifique", "Arctique"],
    reponse: "Pacifique",
  },
  4: {
    question: "Qui a invente l'ampoule electrique ?",
    proposition: ["Tesla", "Einstein", "Newton", "Edison"],
    reponse: "Edison",
  },
  5: {
    question: "Quel est le langage utilise pour styliser les pages web ?",
    proposition: ["HTML", "Python", "CSS", "Java"],
    reponse: "CSS",
  },
  6: {
    question: "Combien de jours y a-t-il dans une annee bissextile ?",
    proposition: ["365", "366", "364", "360"],
    reponse: "366",
  },
  7: {
    question: "Quel est l'animal le plus rapide sur terre ?",
    proposition: ["Lion", "Guepard", "Tigre", "Cheval"],
    reponse: "Guepard",
  },
  8: {
    question: "Quelle planete est la plus proche du Soleil ?",
    proposition: ["Venus", "Terre", "Mars", "Mercure"],
    reponse: "Mercure",
  },
  9: {
    question: "Combien font 9 x 8 ?",
    proposition: ["72", "64", "81", "70"],
    reponse: "72",
  },
  10: {
    question: "Quel est le plus grand desert du monde ?",
    proposition: ["Sahara", "Gobi", "Antarctique", "Kalahari"],
    reponse: "Antarctique",
  },
};

export const totalQuestions = Object.keys(questions).length;
