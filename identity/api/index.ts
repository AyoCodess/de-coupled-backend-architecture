import { Router } from "express";
import { createSignIn } from "./sign_in";
import { createVerify } from "./verify";

export function createApi(app: Router) {
  return {
    signIn: createSignIn(app),
    verify: createVerify(app),
  };
}
