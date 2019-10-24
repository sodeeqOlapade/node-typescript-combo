import http from "http";
import express from "express";
import { applyMiddleware } from "./utils";
import middleware from "./middleware";

const app = express();
applyMiddleware(middleware, app);

const { PORT = 3000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);