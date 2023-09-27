import { Router } from "express";
import ViewsController from "../../controllers/views";
import UserFavoritesDB from "../../models/db/logic";

const router = Router();

router.get("/", ViewsController.mainPage);
router.get("/movie/:id", ViewsController.moviePage);
router.get("/favorites", ViewsController.favorites);

export default router;
