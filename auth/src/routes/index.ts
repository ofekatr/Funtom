import express from "express";
import { errorHandlingMiddleware } from "../middlewares/error-handling.middleware";
import { notFoundMiddleware } from "../middlewares/not-found.middleware";
import { apiRouter } from "./api";

const router = express.Router()

router.use(apiRouter);
router.use(notFoundMiddleware);
router.use(errorHandlingMiddleware);

export { router as appRouter }