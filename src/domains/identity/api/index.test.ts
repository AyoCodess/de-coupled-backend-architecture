import { describe, expect } from "@jest/globals";
import express from "express";
import request from "supertest";
import { getSignInMethod, getVerifyMethod } from ".";
import { createIdentityApi } from "..";
import { ApiRoutes } from "../../createRouter";

describe("Sign In and verify APIs", () => {
  let router = express();
  const identity = createIdentityApi();
  const signInRoute = ApiRoutes.identity.signIn;
  const verifyRoute = ApiRoutes.identity.verify;

  beforeEach(() => {
    getSignInMethod(router, identity.api.signIn, signInRoute);
    getVerifyMethod(router, identity.api.verify, verifyRoute);
  });

  it("should return data object", async () => {
    const response = await request(router).get(signInRoute);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      ok: true,
      message: "AUTHORIZED",
      error: null,
    });
  });

  it("should return data object", async () => {
    const response = await request(router).get(verifyRoute);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      ok: true,
      message: "VERIFYING",
      error: null,
    });
  });
});
