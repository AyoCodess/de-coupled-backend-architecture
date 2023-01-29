import express from "express";
import request from "supertest";
import { getProductsMethod } from ".";
import { createProductsApi } from "..";
import { ApiRoutes } from "../../createRouter";
import { productData } from "./repo";

describe("product api tests", () => {
  let router = express();
  const productsRoute = ApiRoutes.products.getProducts;
  const products = createProductsApi();

  beforeEach(() => {
    getProductsMethod(router, products.api.getProducts, productsRoute);
  });

  it("should return json data", async () => {
    const response = await request(router).get(productsRoute);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(productData);
  });
});
