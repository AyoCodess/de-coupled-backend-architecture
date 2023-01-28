import { createApi } from "./api";

type IdentityApi = {
  api: ReturnType<typeof createApi>;
};

export function createIdentityApi(): IdentityApi {
  return {
    api: createApi(),
  };
}
