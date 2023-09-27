import { Router } from "express";
import DBController from "../../controllers/db";

const router = Router();

router.post("/favorite/:id", DBController.addToFavorite);
router.post("/unfavorite/:id", DBController.unFavorite);

export default router;
