import { Router } from "express";

export function getProductsMethod(
  router: Router,
  getProducts: object,
  getProductsRoute: string
) {
  router.get(getProductsRoute, (req, res) => {
    res.send(getProducts);
  });
}

export * from "./get_products";
