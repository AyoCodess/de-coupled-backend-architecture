import cors from "cors";
import express, { Router } from "express";
import { createRouter } from "./domains/createRouter";

const port = 3000;

const app = express();
const router = Router();
app.use(express.json());
app.use(cors());
app.use("/api", router);

createRouter(router);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
