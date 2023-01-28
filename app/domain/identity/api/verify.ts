import { Router } from "express";
import { ApiRoutes } from "../../../types";

export function createVerify(app: Router) {
  const verify = ApiRoutes.identity.verify;
  app.get(verify, (req, res) => {
    res.send("verifying user...");
  });
}
