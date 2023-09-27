import { Request, Response } from "express";
import request from "request";
import { configFromEnv } from "../../config";
import UserFavoritesDB from "../../models/db/logic";

class ViewsController {
  async mainPage(req: Request, res: Response) {
    try {
      request.get(
        `http://api.themoviedb.org/3/movie/now_playing?api_key=${configFromEnv.API_KEY}`,
        (err, resFromReq, data) => {
          if (err) throw err;
          const parsedData = JSON.parse(data);
          res.render("index", {
            parsedData: parsedData.results,
            user: req.user,
            inFavorite: false,
          });
        }
      );
    } catch (err) {
      res.send(err);
    }
  }
  async moviePage(req: Request, res: Response) {
    try {
      const movieId = req.params.id;
      request.get(
        `http://api.themoviedb.org/3/movie/${movieId}?api_key=${configFromEnv.API_KEY}`,
        (err, resFromReq, data) => {
          if (err) throw err;
          const parsedData = JSON.parse(data);
          res.render("singleMovie", {
            parsedData,
            user: req.user,
            canAddToFavorite: true,
          });
        }
      );
    } catch (err) {
      res.send(err);
    }
  }
  async favorites(req: Request, res: Response) {
    try {
      if (!req.user) return res.redirect("/");
      const movies = await UserFavoritesDB.getById(req.user.id);

      res.render("index", {
        parsedData: movies,
        user: req.user,
        inFavorite: true,
      });
    } catch (err) {
      res.send(err);
    }
  }
}

export default new ViewsController();
