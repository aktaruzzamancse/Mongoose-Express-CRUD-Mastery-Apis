import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouters } from "./app/modules/user/user.route";
const app: Application = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

//Application Routes
app.use("/api/users", UserRouters);

// app.get("/", (req: Request, res: Response) => {
//   var a = 20;
//   res.send(a);
// });

export default app;
