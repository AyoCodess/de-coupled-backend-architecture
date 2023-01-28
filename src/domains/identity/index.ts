import { Router } from "express";
import { createApi } from "./api";

export function createIdentityApi(router: Router) {
  return {
    api: createApi(router),
  };
}
