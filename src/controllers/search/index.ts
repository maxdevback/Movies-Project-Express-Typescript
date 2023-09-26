import { Request, Response } from "express";
import request from "request";
import { configFromEnv } from "../../config";

class SearchController {
  search(req: Request, res: Response) {
    console.log("Work");
    try {
      const searchQuery = req.body.movieSearch;
      const cat = req.body.cat;
      console.log(req.body);
      request.get(
        `http://api.themoviedb.org/3/search/${cat}?query=${searchQuery}&api_key=${configFromEnv.API_KEY}`,
        (err, resFromReq, data) => {
          if (err) throw err;
          const parsedData = JSON.parse(data);
          if (cat === "person") {
            parsedData.results = parsedData.results[0].known_for;
          }
          console.log(parsedData);
          res.render("index", {
            parsedData: parsedData.results,
          });
        }
      );
    } catch (err) {
      res.send(err);
    }
  }
}

export default new SearchController();
