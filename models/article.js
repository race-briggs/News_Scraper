var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  headline: String,
  summary: String,
  URL: String,
  saved: false,
  date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "comment"
  }
});

var Article = mongoose.model("Article", articleSchema)

module.exports = Article;