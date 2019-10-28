var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  headline: String,
  summary: String,
  URL: String,
  saved: false
});

var Article = mongoose.model("Article", articleSchema)

module.exports = Article;