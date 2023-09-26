import { Request, Response } from "express";
import request from "request";
import { configFromEnv } from "../../config";

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
          console.log(parsedData);
          res.render("singleMovie", {
            parsedData,
          });
        }
      );
    } catch (err) {
      res.send(err);
    }
  }
}

export default new ViewsController();
