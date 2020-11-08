const express = require("express");
const router = express.Router();
const db = require("../models/Book");

router.post("/api/save", ({ body }, res) => {
  db.Book.create(body)
    .then((savedBook) => {
      res.json(savedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

router.delete("/api/books/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
    .then((deleteBook) => {
      res.json(deleteBook);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

router.get("/api/all", (req, res) => {
  db.Book.find({})
    .then((allBooks) => {
      res.json(allBooks);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "There was an error saving the book",
      });
    });
});

module.exports = router;