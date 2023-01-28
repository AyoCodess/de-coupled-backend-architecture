import { Router } from "express";
import * as repo from "./repo";

export function getServerStatus(router: Router) {
  repo.getStatus(router);
}
