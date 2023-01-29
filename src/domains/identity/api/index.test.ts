import { describe, expect } from "@jest/globals";
import express, { Router } from "express";
import request from "supertest";
import { createVerify } from "./verify";
import { ApiRoutes } from "../../types";
import { createSignIn } from "./sign_in";
import { createRouter } from "../../createRouter";

describe("Sign In and verify APIs", () => {
  let router = Router();
  const signIn = ApiRoutes.identity.signIn;
  const verify = ApiRoutes.identity.verify;

  beforeEach(() => {
    createRouter(router);
    // createSignIn();
    // createVerify();
  });

  it("should return test string", async () => {
    const response = await request(router).get(signIn);
    expect(response.status).toBe(200);
    expect(response.text).toBe("signing in...");
  });

  it("should return test string", async () => {
    const response = await request(router).get(verify);
    expect(response.status).toBe(200);
    expect(response.text).toBe("verifying user...");
  });
});
