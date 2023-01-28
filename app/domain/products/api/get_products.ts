import { Router } from "express";
import { ApiRoutes } from "../../../types";
import * as repo from "./repo";

export function createGetProducts(app: Router) {
  repo.getProducts(app);
}
