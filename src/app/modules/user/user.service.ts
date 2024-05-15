import config from "../../config";
import { User } from "./user.interface";
import { UserModel } from "./user.model";
import bcrypt from "bcrypt";

const Createuser = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await UserModel.find().select({
    password: 0,
  });
  return result;
};

const getSingleUser = async (userId: number) => {
  const result = await UserModel.findOne({ userId }).select({
    password: 0,
  });
  return result;
};

const deleteSingleUser = async (userId: number) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

const updateSingleUser = async (userId: number, user: User) => {
  const userData = user;

  userData.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  const result = await UserModel.updateOne({ userId }, user);
  return result;
};

export const UserServices = {
  Createuser,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
};
