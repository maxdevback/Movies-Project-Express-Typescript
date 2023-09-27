import { Router } from "express";

import errorRouter from "./error";
import viewRouter from "./views";
import searchRouter from "./search";
import authRouter from "./auth";
import dbRouter from "./db";

const router = Router();
router.use("/", viewRouter);
router.use("/search", searchRouter);
router.use("/", authRouter);
router.use("/", dbRouter);
router.use(errorRouter);

export default router;
