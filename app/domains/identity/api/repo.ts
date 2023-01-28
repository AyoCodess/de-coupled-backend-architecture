import { Router } from "express";
import { ApiRoutes } from "../../types";

const signInRoute = ApiRoutes.identity.signIn;
const verifyRoute = ApiRoutes.identity.verify;

export function signIn(router: Router) {
  router.get(signInRoute, (req, res) => {
    res.send("signing in...");
  });
}

export function verify(router: Router) {
  router.get(verifyRoute, (req, res) => {
    res.send("verifying user...");
  });
}
