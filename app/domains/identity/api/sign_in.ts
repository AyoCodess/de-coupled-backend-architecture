import { Router } from "express";
import * as repo from "./repo";

export function createSignIn(router: Router) {
  repo.signIn(router);
}
