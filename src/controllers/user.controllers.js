import Users from "../models/user.models.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const encryptPassword = (req, res) => {
  const { password } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.status(400).json({
        message: "error is occuring while encrypting the password",
        err: err,
      });
    } else {
      console.log(hash);
      res.status(200).json({
        message: "encryption completed successfully",
        hash: hash,
      });
    }
  });
};

const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
    expiresIn: "6h",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, {
    expiresIn: "7d",
  });
};
export { encryptPassword, generateAccessToken, generateRefreshToken };
