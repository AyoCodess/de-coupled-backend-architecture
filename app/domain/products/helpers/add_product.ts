import { productData } from "./../api/repo";

type Item = {
  [key: string]: string;
};
export function addProduct(item: Item) {
  return { ...productData, ...item };
}
