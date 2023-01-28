import { Router } from "express";
import { ApiRoutes } from "../../../types";

export function createGetProducts(app: Router) {
  const products = ApiRoutes.products.getProducts;
  app.get(products, (req, res) => {
    res.send({
      shoe: "£100",
    });
  });
}
