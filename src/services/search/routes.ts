import { Request, Response, NextFunction } from "express";
import { getPlacesByName } from "./SearchController";
import {checkSearchParams} from "../../middleware/checks"

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
      console.log("Was here...");
      res.json(`Hello ${req.params.id}`);
    }
  },
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams,
      async ( req: Request, res: Response, next: NextFunction) => {
        const result = await getPlacesByName(req.query.q);
        req.body.result = result;
        next();
      },
      async ( req : Request, res: Response) => {
        res.status(200).send(req.body.result);
      }
    ]
  }
];
