import cors from "cors";
import express from "express";
import { createRouter } from "./domain/createRouter";
import { getServerStatus } from "./get_server_status";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

createRouter(app);
getServerStatus(app);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
