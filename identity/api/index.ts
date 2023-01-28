import { createSignIn } from "./sign_in";
import { createVerify } from "./verify";

type Api = {
  signIn: () => string;
  verify: () => string;
};
export function createApi(): Api {
  return {
    signIn: createSignIn(),
    verify: createVerify(),
  };
}
