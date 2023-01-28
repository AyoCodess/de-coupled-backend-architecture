import { Router } from "express";

export function createVerify(app: Router) {
  app.get("/verify", (req, res) => {
    res.send("verifying user...");
  });
}
