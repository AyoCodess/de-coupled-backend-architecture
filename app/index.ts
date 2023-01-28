import express from "express";
import { createRouter } from "./domain/createRouter";

const app = express();
const port = 3000;

createRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
