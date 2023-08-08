const mongoose = require("mongoose");


const bookUserSchema = new mongoose.Schema({
    bookId: { 
        type: String,
        unique: true,
        required:true 
    },
    userId: { 
        type: String,
        unique: true,
        required:true 
    },
    
  });
  
  const BookUser = mongoose.model("BookUser", bookUserSchema);
  module.exports = BookUser;