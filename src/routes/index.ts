import { Router } from "express";

import errorRouter from "./error";
import viewRouter from "./views";
import searchRouter from "./search";

const router = Router();
router.use("/", viewRouter);
router.use("/search", searchRouter);
router.use(errorRouter);

export default router;
