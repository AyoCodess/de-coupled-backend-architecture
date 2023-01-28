import { productData } from "../api/repo";
import { addProduct } from "./add_product";

describe("product api tests", () => {
  it("add product takes returns product data", () => {
    const result = addProduct();
    expect(result).toBe(productData);
  });
});
