import { Router } from "express";
import { createGetProducts } from "./get_products";

export function createApi(app: Router) {
  return {
    getProducts: createGetProducts(app),
  };
}
