const express = require("express");
const routes = express.Router();
const moment = require("moment");
const itemController = require("../controllers/Item.Controller");

routes
.get("/searchItem", (req, res) => {
  itemController.searchItems(req.query.q).then((data) => res.send(data));
})
.get("/items", (req, res) => {
  itemController.getDetailsById(req.query.id).then((data) => res.send(data));
})

module.exports = routes;
