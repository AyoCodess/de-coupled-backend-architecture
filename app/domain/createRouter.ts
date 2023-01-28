import { Router } from "express";
import { createIdentityApi } from "./identity";

export function createRouter(app: Router) {
  return {
    identityDomain: createIdentityApi(app),
  };
}
