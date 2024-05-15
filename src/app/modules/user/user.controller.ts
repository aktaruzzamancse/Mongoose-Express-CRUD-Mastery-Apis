import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userVaildationSchema from "./user.zod.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    //User vaildation using Zod

    const zodParseData = userVaildationSchema.parse(user);

    //Calling Createuser Service
    const result = await UserServices.Createuser(zodParseData);

    //send response

    res.status(200).json({
      success: true,
      massage: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "Faild to create user!",
      error: {
        code: 404,
        description: error,
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();

    res.status(200).json({
      success: true,
      massage: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "Users data not found",
      error: {
        code: 404,
        description: "Users data not found!",
      },
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    //Calling getSingleUser Service
    const result = await UserServices.getSingleUser(userId);

    //send response
    res.status(200).json({
      success: true,
      massage: "User fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    //Calling getSingleUser Service
    const result = await UserServices.deleteSingleUser(userId);

    //send response
    res.status(200).json({
      success: true,
      massage: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    //User vaildation using Zod

    const zodParseData = userVaildationSchema.parse(user);

    //Calling Createuser Service
    const result = await UserServices.updateSingleUser(
      zodParseData.userId,
      zodParseData
    );
    const userId = zodParseData.userId;

    //Get a user data
    const userResult = await UserServices.getSingleUser(userId);
    //send response

    res.status(200).json({
      success: true,
      massage: "User updated successfully!",
      data: userResult,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  updateUser,
};
