import { describe, expect, test } from "@jest/globals";
import { createSignIn } from ".";
import express from "express";
import request from "supertest";
import { createVerify } from "./verify";
import { ApiRoutes } from "../../../types";

describe("Sign In and verify APIs", () => {
  let app: any;
  const signIn = ApiRoutes.identity.signIn;
  const verify = ApiRoutes.identity.verify;

  beforeEach(() => {
    app = express();
    createSignIn(app);
    createVerify(app);
  });
  it("should return test string", async () => {
    const response = await request(app).get(signIn);
    expect(response.status).toBe(200);
    expect(response.text).toBe("signing in...");
  });

  it("should return test string", async () => {
    const response = await request(app).get(verify);
    expect(response.status).toBe(200);
    expect(response.text).toBe("verifying user...");
  });
});
