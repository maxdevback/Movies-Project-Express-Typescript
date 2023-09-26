import { Router } from "express";
import errorRouter from "./error";
import viewRouter from "./views";

const router = Router();
router.use("/", viewRouter);
router.use(errorRouter);

export default router;
