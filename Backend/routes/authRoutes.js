import express from "express";
import { login, register, logout, resetPassword } from "../controllers/authControllers.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);

authRoutes.post("/register", register);

authRoutes.post("/logout", logout);

authRoutes.post("/reset-password", resetPassword);

export default authRoutes;