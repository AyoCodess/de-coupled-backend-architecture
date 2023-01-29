import { Router } from "express";
import { getStatus } from "../status";
import { createIdentityApi } from "./identity";
import { createProductsApi } from "./products";

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
  const status = getStatus();

  const statusRoute = ApiRoutes.status;

  const signIn = identity.api.signIn;
  const signInRoute = ApiRoutes.identity.signIn;

  const verify = identity.api.verify;
  const verifyRoute = ApiRoutes.identity.verify;

  const getProducts = products.api.getProducts;
  const getProductsRoute = ApiRoutes.products.getProducts;

  router.get(statusRoute, (req, res) => {
    res.send(status);
  });

  router.get(signInRoute, (req, res) => {
    res.send(signIn);
  });

  router.get(verifyRoute, (req, res) => {
    res.send(verify);
  });

  router.get(getProductsRoute, (req, res) => {
    res.send(getProducts);
  });
}
