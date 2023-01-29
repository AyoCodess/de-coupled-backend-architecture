import { Router } from "express";

export function getStatusMethod(
  router: Router,
  getStatus: () => string,
  statusRoute: string
) {
  router.get(statusRoute, (req, res) => {
    res.send(getStatus());
  });
}

export * from "./get_server_status";
