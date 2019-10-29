var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  headline: String,
  summary: String,
  URL: String,
  saved: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: Schema.Types.Array,
    ref: "comments"
  }
});

var article = mongoose.model("article", articleSchema)

module.exports = article;