import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/login",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

export default router;
