import { Router } from "express";
import { ApiRoutes } from "../../../types";
import * as repo from "./repo";

export function createVerify(app: Router) {
  repo.verify(app);
}
