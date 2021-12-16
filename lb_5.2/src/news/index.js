const Router = require("express").Router;
const newsController = require("./controller.js");

const newsRouter = new Router();

//CRUD
bookRouter.get("/", newsController.getAll);
bookRouter.get("/query", newsController.getQuery);
bookRouter.get("/:id", newsController.getById);
bookRouter.delete("/:id", newsController.delete);
bookRouter.post("/", newsController.post);
bookRouter.patch("/:id", newsController.patch);

module.exports = newsRouter;