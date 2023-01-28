import cors from "cors";
import express from "express";
import { createRouter } from "./domains/createRouter";
import { getServerStatus } from "./status";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

createRouter(app);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
