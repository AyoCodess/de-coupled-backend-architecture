import { Router } from "express";
import { createSignIn } from "./sign_in";
import { createVerify } from "./verify";

export function createApi(router: Router) {
  return {
    signIn: createSignIn(router),
    verify: createVerify(router),
  };
}
