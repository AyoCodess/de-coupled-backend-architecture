import { describe, expect } from "@jest/globals";
import express from "express";
import request from "supertest";
import { createVerify } from "./verify";
import { ApiRoutes } from "../../../types";
import { createSignIn } from "./sign_in";

describe("Sign In and verify APIs", () => {
  let app = express();
  const signIn = ApiRoutes.identity.signIn;
  const verify = ApiRoutes.identity.verify;

  beforeEach(() => {
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
