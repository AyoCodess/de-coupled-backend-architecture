import { ApiRoutes } from "../domains/types";
import { Router } from "express";

export function getStatus(router: Router) {
  const status = ApiRoutes.status;
  router.get(status, (req, res) => {
    res.send("ok");
  });
}
