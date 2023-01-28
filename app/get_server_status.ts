import { Router } from "express";

export function getServerStatus(app: Router) {
  app.get("/", (req, res) => {
    res.send("ok");
  });
}
