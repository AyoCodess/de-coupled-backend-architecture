import express from "express";
import request from "supertest";
import { ApiRoutes } from "../../../types";
import { createGetProducts } from "./get_products";
import { productData } from "./repo";

describe("product api tests", () => {
  let router = express();
  const products = ApiRoutes.products.getProducts;

  beforeEach(() => {
    createGetProducts(router);
  });

  it("should return json data", async () => {
    const response = await request(router).get(products);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(productData);
  });


});
