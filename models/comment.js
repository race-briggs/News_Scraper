var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  articleId: {
    type: Schema.Types.ObjectId,
    ref: "article"
  },
  comment: [String]
})

var comments = mongoose.model("comments", commentSchema);

module.exports = comments;