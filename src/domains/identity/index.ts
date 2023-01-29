import { createSignIn } from "./api/sign_in";
import { createVerify } from "./api/verify";

export type IdentityApi = {
  api: {
    signIn: ReturnType<typeof createSignIn>;
    verify: ReturnType<typeof createVerify>;
  };
};

export function createIdentityApi(): IdentityApi {
  return {
    api: {
      signIn: createSignIn(),
      verify: createVerify(),
    },
  };
}
