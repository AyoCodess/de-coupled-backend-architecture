import { Router } from "express";
import { ApiRoutes } from "../../types";

export const productData = {
  shoe: "£100",
  shirt: "£50",
  trousers: "£75",
};

const router = Router();

export function getProducts() {
  const products = ApiRoutes.products.getProducts;
  router.get(products, (req, res) => {
    res.send(productData);
  });
}
