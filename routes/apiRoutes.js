var db = require("../models");
var scraper = require("../scripts/scraper");

module.exports = function(app) {
  //scrape
  app.get("/scrape", function(req, res){
    return scraper().then(function(articles){
      return db.article.create(articles);
    }).then(function(articles){
      if(articles.length === 0){
        res.json({message: "No new articles!"});
      } else {
        res.json({message: "Scraped " + articles.length + " new articles!"});
      }
    }).catch(function(error){
      res.json({error: error});
    })
  })
  //clear
  app.get("/clear", function(req, res){
    db.article.remove({}).then(function(){
      return db.comments.remove({});
    }).then(function(){
      res.json({deleted: true});
    })
  });
  //article routes
  app.get("/article", function (req, res) {
    db.article.find(req.query).sort({date: -1}).then(function (response) {
      res.json(response);
    })
  })
  app.delete("/article/:id", function (req, res) {
    db.article.remove({ _id: req.params.id }).then(function (response) {
      res.json(response);
    })
  })
  app.put("/article/:id", function(req, res){
    db.article.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true, useFindAndModify:false}).then(function(updatedArticle){
      res.json(updatedArticle);
    })
  })
  //comments route
  app.get("/comments/:id", function(req,res){
    db.comments.find({_id: req.params.id}).then(function(comment){
      res.json(comment);
    })
  })
  app.post("/comments", function(req, res){
    db.comments.create(req.body).then(function(comment){
      res.json(comment)
    })
  })
  app.delete("/comments/:id", function(req,res){
    db.comments.remove({ _id: req.params.id }).then(function (comment) {
    res.json(comment);
  })
  })
}