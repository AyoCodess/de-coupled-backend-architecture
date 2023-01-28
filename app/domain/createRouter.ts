import { Router } from "express";
import { createIdentityApi } from "./identity";
import { createProductsApi } from "./products";

export function createRouter(app: Router) {
  return {
    identity: createIdentityApi(app),
    products: createProductsApi(app),
  };
}
