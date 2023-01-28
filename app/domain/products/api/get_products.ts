import { Router } from "express";
import { ApiRoutes } from "../../../types";

export const productData = {
  shoe: "£100",
  shirt: "£50",
  trousers: "£75",
};

export function createGetProducts(app: Router) {
  const products = ApiRoutes.products.getProducts;
  app.get(products, (req, res) => {
    res.send(productData);
  });
}
