import { Schema, model } from "mongoose";
import { User, address, fullName } from "./user.interface";

const fullNameSchema = new Schema<fullName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name is required"],
  },
});

const addressSchema = new Schema<address>({
  street: {
    type: String,
    trim: true,
    required: [true, "Street adress is required"],
  },
  city: {
    type: String,
    trim: true,
    required: [true, "City is required"],
  },
  country: {
    type: String,
    trim: true,
    required: [true, "Country is required"],
  },
});

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: [true, "User Name is required"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Password is required"],
  },
  fullName: {
    type: fullNameSchema,
    required: [true, "FullName is required"],
  },
  age: {
    type: Number,
    trim: true,
    required: [true, "Age is required"],
  },
  email: {
    type: String,
    trim: true,
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
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

//query middleware
userSchema.pre("find", function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});

userSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});
export const UserModel = model<User>("User", userSchema);
