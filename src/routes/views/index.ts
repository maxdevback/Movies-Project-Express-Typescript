import { Router } from "express";
import ViewsController from "../../controllers/views";

const router = Router();

router.get("/", ViewsController.mainPage);
router.get("/movie/:id", ViewsController.moviePage);

export default router;
