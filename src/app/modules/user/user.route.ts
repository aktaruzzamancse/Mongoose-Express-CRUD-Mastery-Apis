import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

//UserCreate Controller func

router.post("/", UserControllers.createUser);
router.get("/", UserControllers.getAllUsers);
router.get("/:userId", UserControllers.getSingleUser);

export const UserRouters = router;
