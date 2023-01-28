import { Router } from "express";

export function getStatus(router: Router) {
  router.get("/", (req, res) => {
    res.send("ok");
  });
}
