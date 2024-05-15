import { User } from "./user.interface";
import { UserModel } from "./user.model";

const Createuser = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUser = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

const deleteSingleUser = async (userId: number) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

const updateSingleUser = async (userId: number, user: User) => {
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
