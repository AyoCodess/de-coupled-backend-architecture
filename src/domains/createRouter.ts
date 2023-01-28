import { Router } from "express";
import { getStatus } from "../status/repo";
import { createIdentityApi } from "./identity";
import { createProductsApi } from "./products";

export function createRouter(app: Router) {
  const router = Router();
  app.use("/api", router);
  return {
    identity: createIdentityApi(router),
    products: createProductsApi(router),
    status: getStatus(router),
  };
}
