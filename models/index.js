var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Article = require("./article");
var Comments = require("./comment");

var completeSchema = new Schema({
  article: Article,
  comments: Comments
});

var databaseEntry = mongoose.model("databaseEntry", completeSchema);

module.exports = databaseEntry;