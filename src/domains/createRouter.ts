import { Router } from "express";
import { createIdentityApi } from "./identity";
import { createProductsApi } from "./products";

export function createRouter(router: Router) {
  return {
    identity: createIdentityApi(router),
    products: createProductsApi(router),
  };
}
