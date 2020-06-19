const proverbios = [
  {
    id: 1,
    part1: "Mais vale um pássaro na mão",
    part2: "que dois a voar",
    language: "pt-pt"
  },
  {
    id: 2,
    part1: "Grão a grão",
    part2: "enche a galinha o papo",
    language: "pt-pt"
  },
  {
    id: 3,
    part1: "A cavalo dado",
    part2: "não se olha o dente",
    language: "pt-pt"
  },
  {
    id: 4,
    part1: "Em Abril",
    part2: "águas mil",
    language: "pt-pt"
  },
  {
    id: 5,
    part1: "Em casa de ferreiro",
    part2: "espeto de pau",
    language: "pt-pt"
  }
];

export type ProverbioType = typeof proverbios[0];

export default proverbios;
