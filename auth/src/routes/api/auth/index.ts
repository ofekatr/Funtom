import express from "express";
import { currentUserRouter } from "./current-user.route";
import { signInRouter } from "./signin.route";
import { signOutRouter } from "./signout.route";
import { signUpRouter } from "./signup.route";

const router = express.Router()
router.use(currentUserRouter);
router.use(signInRouter);
router.use(signUpRouter);
router.use(signOutRouter);

export { router as authRouter }