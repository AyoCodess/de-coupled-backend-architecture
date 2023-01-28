import express from "express";
import { createIdentityApi } from "../identity";

const app = express();
const port = 3000;
const identity = createIdentityApi();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
