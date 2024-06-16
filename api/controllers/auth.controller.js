import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const errorHandler = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
  };
  export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return next(errorHandler(409, "User already exists!"));
      }
      next(error);
    }
  };