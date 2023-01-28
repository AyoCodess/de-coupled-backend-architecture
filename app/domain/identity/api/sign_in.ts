import { Router } from "express";

export function createSignIn(app: Router) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}
