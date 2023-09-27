import { Request, Response } from "express";
import request from "request";
import UserFavoritesDB from "../../models/db/logic";
import { configFromEnv } from "../../config";

class DBController {
  async addToFavorite(req: Request, res: Response) {
    try {
      if (!req.user) return res.redirect("/");
      request.get(
        `http://api.themoviedb.org/3/movie/${req.params.id}?api_key=${configFromEnv.API_KEY}`,
        async (err, reqFromRes, data) => {
          if (!req.user) return res.redirect("/");
          await UserFavoritesDB.add(JSON.parse(data), req.user.id);
          res.redirect("/favorites");
        }
      );
    } catch (err) {
      res.send(err);
    }
  }
  async unFavorite(req: Request, res: Response) {
    try {
      if (!req.user) return res.redirect("/");
      await UserFavoritesDB.unFavorite(req.params.id, req.user.id);
      res.redirect("/favorites");
    } catch (err) {
      res.send(err);
    }
  }
}

export default new DBController();
