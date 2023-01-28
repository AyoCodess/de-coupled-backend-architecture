import { Router } from "express";
import * as repo from "./repo";

export function createGetProducts(router: Router) {
  repo.getProducts(router);
}
