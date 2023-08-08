const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookId: { type: String,
               unique: true,
               required:true },
    bookName:{ type: String,
               unique:true,
               required:true},
  });
  
  const Book = mongoose.model("Book", bookSchema);
  module.exports = Book;