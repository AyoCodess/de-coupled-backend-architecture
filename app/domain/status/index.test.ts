import express from "express";
import request from "supertest";
import { ApiRoutes } from "../../types";
import { getServerStatus } from "./get_server_status";

describe("product api tests", () => {
  let router = express();
  const status = ApiRoutes.status;

  beforeEach(() => {
    getServerStatus(router);
  });

  it("should return test string", async () => {
    const response = await request(router).get(status);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });
});
