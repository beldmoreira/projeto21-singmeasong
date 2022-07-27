import supertest from "supertest";
import app from "./../src/app.js";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import prisma from "../src/database.js";


beforeEach(async () => {
  await prisma.user.deleteMany(); // remove all previous users
})

const APP = supertest(app);

describe("recommendation tests", () => {
    it("should offer a new recommendation", async () => {
        const response = await APP.post("/recommendations").send(recommendation);
        expect(response.statusCode).toBe(201);
    });
    it("should upvote a recommendation", async () => {
        const response = await APP.post("/recommendations/:id/upvote");
        expect(response.statusCode).toBe(200);
    });
    it("should downvote a recommendation", async () => {
        const response = await APP.post("/recommendations/:id/downvote");
        expect(response.statusCode).toBe(200);
    });
})  
    


afterAll(async () => {
    await prisma.$disconnect();
  })

