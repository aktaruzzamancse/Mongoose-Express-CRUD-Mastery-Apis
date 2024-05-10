import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    //Calling Createuser Service
    const result = await UserServices.Createuser(user);

    //send response

    res.status(200).json({
      success: true,
      massage: "User created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createUser,
};
