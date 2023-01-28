import { Router } from "express";

export function getServerStatus(router: Router) {
  router.get("/", (req, res) => {
    res.send("ok");
  });
}
