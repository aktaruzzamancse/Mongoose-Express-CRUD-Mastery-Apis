import { z } from "zod";

const fullNameVaildationSchema = z.object({
  firstName: z.string({
    required_error: "First Name is required",
    invalid_type_error: "First Name must be a string",
  }),
  lastName: z.string({
    required_error: "Last Name is required",
    invalid_type_error: "Last Name must be a string",
  }),
});

const addressVaildationSchema = z.object({
  street: z.string({
    required_error: "Street address is required",
    invalid_type_error: "Street address must be a string",
  }),
  city: z.string({
    required_error: "City is required",
    invalid_type_error: "City must be a string",
  }),
  country: z.string({
    required_error: "Country is required",
    invalid_type_error: "Country must be a string",
  }),
});

const userVaildationSchema = z.object({
  userId: z.number(),
  username: z.string({
    required_error: "User Name is required",
    invalid_type_error: "User Name must be a string",
  }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .max(20),
  fullName: fullNameVaildationSchema,
  age: z.number(),
  email: z.string().email({ message: "Invalid email address" }),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: addressVaildationSchema,
  isDeleted: z.boolean().default(false),
});

export default userVaildationSchema;
