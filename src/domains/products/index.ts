import { createGetProducts } from "./api";

type ProductsApi = {
  api: {
    getProducts: ReturnType<typeof createGetProducts>;
  };
};

export function createProductsApi(): ProductsApi {
  return {
    api: {
      getProducts: createGetProducts(),
    },
  };
}
