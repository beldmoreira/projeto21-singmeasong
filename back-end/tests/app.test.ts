import supertest from "supertest";
import { faker } from "@faker-js/faker";
import app from "./../src/app.js";
import { prisma } from "../src/database.js";
import { deleteAllData } from "./factories/deleteAllData.js";
import {
  createManyRecommendations,
  createRecommendation,
} from "./factories/creatingRecommendations.tests.js";

beforeEach(async () => {
  await deleteAllData();
});

const APP = supertest(app);

describe("recommendation tests", () => {
  it("should offer a new recommendation", async () => {
    const recommendation = createRecommendation();
    const response = await APP.post(`/recommendations`).send(recommendation);
    expect(response.statusCode).toBe(201);

    const recommendationCreated = await prisma.recommendation.findFirst({
      where: {
        name: recommendation.name,
        youtubeLink: recommendation.youtubeLink,
      },
    });

    expect(recommendationCreated).not.toBeNull();
  });

  it("should return 422 when created a recommendation without a name", async () => {
    const recommendation = createRecommendation();
    const response = await APP.post(`/recommendations`).send({
      youtubeLink: recommendation.youtubeLink,
    });
    expect(response.statusCode).toBe(422);
  });

  it("should return 422 when created a recommendation without a valid link", async () => {
    const recommendation = createRecommendation();
    const response = await APP.post(`/recommendations`).send({
      name: recommendation.name,
    });
    expect(response.statusCode).toBe(422);
  });
});

describe("recommendation tests", () => {
  it("should get the last ten recommendations and return 200", async () => {
    const recommendation = createManyRecommendations();
    await prisma.recommendation.createMany({
      data: recommendation,
    });
    const response = await APP.get(`/recommendations`);
    const status = response.status;
    expect(status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(10);
  });

  it("should get a random recommendationn and return 200", async () => {
    const recommendations = createManyRecommendations();
    await prisma.recommendation.createMany({
      data: recommendations,
    });
    const response = await APP.get(`/recommendations/random`);
    const status = response.status;
    expect(status).toBe(200);
  });
  it("gets the recommendations with the most point and returns 200", async () => {
    const recommendations = createManyRecommendations();
    await prisma.recommendation.createMany({
      data: recommendations,
    });
    const amount = faker.datatype.number({ min: 2, max: 5 });
    const result = await APP.get(`/recommendations/top/${amount}`);
    const status = result.status;
    expect(status).toEqual(200);
    expect(result.body.length).toBe(amount);
    expect(result.body[0].score).toBeGreaterThanOrEqual(result.body[1].score);
  });
});

describe("recommendation tests", () => {
  it("gets the recommendation by its id", async () => {
    const recommendations = createManyRecommendations();
    await prisma.recommendation.createMany({
      data: recommendations,
    });
    const test = await prisma.recommendation.findMany();
    const id = faker.datatype.number({ min: 1, max: 9 });
    const result = await supertest(app).get(`/recommendations/${id}`);
    const status = result.status;
    expect(status).toEqual(200);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
