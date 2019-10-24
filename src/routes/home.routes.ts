
import { Request, Response } from "express";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world!");
    }
  },
  {
    path: "/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.json(`Hello ${req.params.id}`);
    }
  }
];