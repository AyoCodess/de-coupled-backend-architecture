import { Router } from "express";
import { createApi } from "./api";

export function createIdentityApi(app: Router) {
  return {
    api: createApi(app),
  };
}
