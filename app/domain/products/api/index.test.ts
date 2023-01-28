import express from "express";
import request from "supertest";
import { ApiRoutes } from "../../../types";
import { createGetProducts } from "./get_products";
import { productData } from "./repo";

describe("product api tests", () => {
  let app = express();
  const products = ApiRoutes.products.getProducts;

  beforeEach(() => {
    createGetProducts(app);
  });

  it("should return test string", async () => {
    const response = await request(app).get(products);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(productData);
  });
});
