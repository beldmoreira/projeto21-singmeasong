import { faker } from "@faker-js/faker";
import { recommendationSchema } from "../../src/schemas/recommendationsSchemas";

export function createRecommendation() {
  const recommendationCreation = {
    name: faker.name.findName(),
    youtubeLink: "https://www.youtube.com/watch?v=2Ynj2lBHV_0",
  };
  const schema = recommendationSchema.validate(recommendationCreation);
  return recommendationCreation;
}

export function createManyRecommendations() {
  const recommendations = [
    {
      name: "ROSALÍA - DESPECHA",
      youtubeLink: "https://www.youtube.com/watch?v=oWSS7DiUgUo",
      score: 11,
    },
    {
      name: "Nathy Peluso - La Sandunguera",
      youtubeLink: "https://www.youtube.com/watch?v=Kuqomj-6q5s",
      score: 245,
    },
    {
      name: "Durand Jones & The Indications - Witchoo",
      youtubeLink: "https://www.youtube.com/watch?v=d7vTtnevlO4",
      score: faker.datatype.number(1000),
    },
    {
      name: "Jenevieve - Baby Powder",
      youtubeLink: "https://www.youtube.com/watch?v=O1Qh7j1yD8Y",
      score: -5,
    },
    {
      name: "Thundercat - Them Changes",
      youtubeLink: "https://www.youtube.com/watch?v=BuzJ5NArvgw",
      score: -3,
    },
    {
      name: "Snarky Puppy - Lingus (We Like It Here)",
      youtubeLink: "https://www.youtube.com/watch?v=L_XJ_s5IsQc",
      score: faker.datatype.number(1000),
    },
    {
      name: "Paco de Lucia - Entre Dos Aguas ",
      youtubeLink: "https://www.youtube.com/watch?v=0vq3qZwaXrw",
      score: faker.datatype.number(1000),
    },
    {
      name: "Georgia Anne Muldrow - Break You Down",
      youtubeLink: "https://www.youtube.com/watch?v=4y0i0oj94h0",
      score: faker.datatype.number(1000),
    },
    {
      name: "The Roots - What They Do",
      youtubeLink: "https://www.youtube.com/watch?v=_qzacv8dtb4",
      score: faker.datatype.number(1000),
    },
    {
      name: "Incubus - Dig ",
      youtubeLink: "https://www.youtube.com/watch?v=nMsZ6wkZWhA",
      score: faker.datatype.number(1000),
    },
  ];

  return recommendations;
}

export function createData() {
  const recommendation = {
    id: 2,
    name: faker.name.findName(),
    youtubeLink:
      "https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO",
    score: -5,
  };

  return recommendation;
}
