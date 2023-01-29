import express, { Router } from "express";
import request from "supertest";
import { getStatusMethod } from ".";
import { ApiRoutes } from "../domains/types";
import { getStatus } from "./get_server_status";

describe("getStatusMethod", () => {
  let router = express();
  const statusRoute = ApiRoutes.status;

  beforeEach(() => {
    getStatusMethod(router, getStatus, statusRoute);
  });

  it("should return 'ok'", async () => {
    const response = await request(router).get(statusRoute);
    expect(response.status).toBe(200);
    expect(response.text).toEqual("ok");
  });
});
