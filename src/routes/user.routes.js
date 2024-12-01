import express from "express";
import {
  encryptPassword,
  generateRefreshToken,
  generateAccessToken,
} from "../controllers/user.controllers.js";
const router = express.Router();
router.post("/encryptPassword", encryptPassword);
router.post("/refreshToken", generateRefreshToken);
router.post("/accessToken", generateAccessToken);
export default router;
