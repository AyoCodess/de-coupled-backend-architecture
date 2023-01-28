import { Router } from "express";

export function createSignIn(app: Router) {
  app.get("/signin", (req, res) => {
    res.send("signing in...");
  });
}
