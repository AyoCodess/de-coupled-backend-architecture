import { Router } from "express";
import { createGetProducts } from "./get_products";

export function createApi(router: Router) {
  return {
    getProducts: createGetProducts(router),
  };
}
