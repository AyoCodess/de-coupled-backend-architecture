import { productData } from "../api/repo";
import { addProduct } from "./add_product";

describe("product api tests", () => {
  it("add product returns product data with new product ", () => {
    const item = { ring: "£239" };
    const result = addProduct(item);
    expect(result).toEqual({ ...productData, ...item });
  });
});
