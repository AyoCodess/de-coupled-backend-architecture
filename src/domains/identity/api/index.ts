import { Router } from "express";

export function getSignInMethod(
  router: Router,
  getSignIn: object,
  signInRoute: string
) {
  router.get(signInRoute, (req, res) => {
    res.send(getSignIn);
  });
}

export function getVerifyMethod(
  router: Router,
  getVerify: object,
  signInRoute: string
) {
  router.get(signInRoute, (req, res) => {
    res.send(getVerify);
  });
}
