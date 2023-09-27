import { Request, Response } from "express";
import request from "request";
import UserFavoritesDB from "../../models/db/logic";
import { configFromEnv } from "../../config";

class DBController {
  async addToFavorite(req: Request, res: Response) {
    if (!req.user) return res.redirect("/");
    request.get(
      `http://api.themoviedb.org/3/movie/${req.params.id}?api_key=${configFromEnv.API_KEY}`,
      async (err, reqFromRes, data) => {
        if (!req.user) return res.redirect("/");
        await UserFavoritesDB.add(JSON.parse(data), req.user.id);
        res.redirect("/favorites");
      }
    );
  }
  async unFavorite(req: Request, res: Response) {
    if (!req.user) return res.redirect("/");
    console.log(req.params);
    await UserFavoritesDB.unFavorite(req.params.id, req.user.id);
    res.redirect("/favorites");
  }
}

export default new DBController();
