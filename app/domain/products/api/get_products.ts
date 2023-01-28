import { Router } from "express";

export function createGetProducts(app: Router) {
  app.get("/products", (req, res) => {
    res.send({
      shoe: "£100",
    });
  });
}
