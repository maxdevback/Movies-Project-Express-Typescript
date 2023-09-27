import { Request, Response } from "express";
import request from "request";
import { configFromEnv } from "../../config";

class SearchController {
  search(req: Request, res: Response) {
    try {
      const searchQuery = req.body.movieSearch;
      const cat = req.body.cat;
      request.get(
        `http://api.themoviedb.org/3/search/${cat}?query=${searchQuery}&api_key=${configFromEnv.API_KEY}`,
        (err, resFromReq, data) => {
          if (err) throw err;
          const parsedData = JSON.parse(data);
          if (cat === "person" && parsedData.results[0]?.known_for) {
            parsedData.results = parsedData.results[0].known_for;
          }
          res.render("index", {
            parsedData: parsedData.results,
            inFavorite: false,
            user: req.user,
          });
        }
      );
    } catch (err) {
      res.send(err);
    }
  }
}

export default new SearchController();
