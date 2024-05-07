let collection = require("../model/card");

const postcards = (req, res) => {
  let cat = req.body;
  collection.postcards(cat, (err, result) => {
    if (!err) {
      res.json({ statusCode: 201, data: result, message: "success" });
    }
  });
};

const getAllCards = (req, res) => {
  collection.getAllCards((err, result) => {
    if (!err) {
      res.json({
        statusCode: 200,
        data: result,
        message: "get all cats successful",
      });
    }
  });
};

module.exports = { postcards, getAllCards };
