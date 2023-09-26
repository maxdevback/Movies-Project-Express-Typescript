import { Router } from "express";
import ViewsController from "../../controllers/views";

const router = Router();

router.get("/", ViewsController.mainPage);

export default router;
