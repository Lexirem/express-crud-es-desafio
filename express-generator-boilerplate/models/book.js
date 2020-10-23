const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
  title: {type: String},// tiene que ser una String
  description: {type: String},// tiene que ser una String
  author: {type: String},// tiene que ser una String
  rating: {type: Number}// tiene que ser un Número
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;