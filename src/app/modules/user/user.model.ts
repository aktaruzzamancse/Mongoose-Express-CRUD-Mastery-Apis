import { Schema, model } from "mongoose";
import { User, address, fullName } from "./user.interface";

const fullNameSchema = new Schema<fullName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
});

const addressSchema = new Schema<address>({
  street: {
    type: String,
    required: [true, "Street adress is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
});

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: [true, "User Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  fullName: {
    type: fullNameSchema,
    required: [true, "FullName is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  hobbies: [String],
  address: {
    type: addressSchema,
    required: [true, "Address is required"],
  },
});

export const UserModel = model<User>("User", userSchema);
