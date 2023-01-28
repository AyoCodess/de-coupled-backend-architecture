import { Router } from "express";
import { ApiRoutes } from "../../../types";

const signInRoute = ApiRoutes.identity.signIn;
const verifyRoute = ApiRoutes.identity.verify;

export function signIn(app: Router) {
  app.get(signInRoute, (req, res) => {
    res.send("signing in...");
  });
}

export function verify(app: Router) {
  app.get(verifyRoute, (req, res) => {
    res.send("verifying user...");
  });
}
