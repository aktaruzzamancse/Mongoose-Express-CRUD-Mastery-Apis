import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouters } from "./app/modules/user/user.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//Application Routes
app.use("/api/users", UserRouters);

export default app;
