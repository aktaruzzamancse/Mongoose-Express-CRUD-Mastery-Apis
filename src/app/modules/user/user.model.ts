import { Schema, model } from "mongoose";
import { User, address, fullName, orders } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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

const ordersSchema = new Schema<orders>({
  productName: {
    type: String,
    trim: true,
    required: [true, "ProductName is required"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Price is required"],
  },
  quantity: {
    type: Number,
    trim: true,
    required: [true, "Quantity is required"],
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
  orders: [ordersSchema],
});

// query middleware
userSchema.pre("find", function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});
userSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});

userSchema.pre("save", async function (next) {
  //hashing password and save in db

  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

export const UserModel = model<User>("User", userSchema);
