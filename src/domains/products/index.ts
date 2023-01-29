import { createGetProducts } from "./api/get_products";

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
