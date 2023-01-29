import { Router } from "express";
import { getStatusMethod } from "../status";
import { getStatus } from "../status/get_server_status";
import { createIdentityApi } from "./identity";
import { getSignInMethod, getVerifyMethod } from "./identity/api";
import { createProductsApi } from "./products";
import { getProductsMethod } from "./products/api";

const ApiRoutes = {
  status: "/",
  identity: {
    signIn: "/signin",
    verify: "/verify",
  },
  products: {
    getProducts: "/products",
  },
};

export function createRouter(router: Router) {
  const identity = createIdentityApi();
  const products = createProductsApi();

  const statusRoute = ApiRoutes.status;
  const signInRoute = ApiRoutes.identity.signIn;
  const verifyRoute = ApiRoutes.identity.verify;
  const getProductsRoute = ApiRoutes.products.getProducts;

  getStatusMethod(router, getStatus, statusRoute);
  getSignInMethod(router, identity.api.signIn, signInRoute);
  getVerifyMethod(router, identity.api.verify, verifyRoute);
  getProductsMethod(router, products.api.getProducts, getProductsRoute);
}
