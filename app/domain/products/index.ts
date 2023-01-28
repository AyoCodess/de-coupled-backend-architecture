import { Router } from "express";
import { createApi } from "./api";

export function createProductsApi(app: Router) {
  return {
    api: createApi(app),
  };
}
