import express, { Router } from "express";
import request from "supertest";
import { createRouter } from "../domains";
import { getStatus } from "./get_server_status";

describe("product api tests", () => {
  let router = Router();

  beforeEach(() => {
    createRouter(router);
  });

  it("should return test string", async () => {
    const response = await request(router).get(status);
    expect(response.status).toBe(200);
    expect(response.text).toEqual("ok");
  });
});
