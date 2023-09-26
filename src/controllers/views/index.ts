import { Request, Response } from "express";

class ViewsController {
  mainPage(req: Request, res: Response) {
    try {
      res.send("This is main page from controller");
    } catch (err) {
      res.send(err);
    }
  }
}

export default new ViewsController();
