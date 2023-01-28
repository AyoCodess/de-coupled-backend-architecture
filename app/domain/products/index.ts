import { Router } from "express";
import { createApi } from "./api";

export function createProductsApi(router: Router) {
  return {
    api: createApi(router),
  };
}
