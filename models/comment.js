var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  comment: [String]
})

var Comments = mongoose.model("Comment", commentSchema);

module.exports = Comments;