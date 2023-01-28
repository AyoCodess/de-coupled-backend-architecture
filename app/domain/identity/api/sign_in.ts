import { Router } from "express";
import { ApiRoutes } from "../../../types";

export function createSignIn(app: Router) {
  const signIn = ApiRoutes.identity.verify;
  app.get(signIn, (req, res) => {
    res.send("signing in...");
  });
}
