import { Router } from "express";
import { ApiRoutes } from "../../../types";
import * as repo from "./repo";

export function createSignIn(app: Router) {
  repo.signIn(app);
}
