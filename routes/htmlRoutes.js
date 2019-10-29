var db = require("../models");

module.exports = function(app){
  app.get("/", function(req, res){
    db.article.find({saved: false}).sort({date: -1}).then(function(results){
      res.render("home", {articles: results});
    });
  });

  app.get("/saved", function (req, res) {
    db.article.find({ saved: true }).sort({ date: -1 }).then(function (results) {
      res.render("saved", { articles: results });
    });
  });
}