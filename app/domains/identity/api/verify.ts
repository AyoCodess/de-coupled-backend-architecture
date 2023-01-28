import { Router } from "express";
import * as repo from "./repo";

export function createVerify(router: Router) {
  repo.verify(router);
}
