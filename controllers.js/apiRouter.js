const express = require("express");
const {burgersModel} = require("../models/models");
const router = express.Router();

router.get("/", async (req, res) => {
  const allBurgers = await burgersModel.getAll();

  res.json(allBurgers);
});

router.post("/", async (req, res) => {
  const dbResponse = await burgersModel.create(req.body);
  const burgerId = dbResponse.insertId;
  res.json(burgerId);
});

router.put("/:id", async (req, res) => {
  await burgersModel.update(req.params.id);

  const response = {id: req.params.id};
  res.json(response);
});

module.exports = router;
