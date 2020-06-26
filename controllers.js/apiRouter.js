const express = require("express");
const {burgersModel} = require("../models/models");
const router = express.Router();

router.get("/", async (req, res) => {
  const allBurgers = await burgersModel.getAll();

  res.json(allBurgers);
});

router.post("/", async (req, res) => {
  const insertId = await burgersModel.create(req.body);

  res.json(insertId);
});

module.exports = router;
