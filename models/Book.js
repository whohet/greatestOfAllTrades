import { Schema, model } from "mongoose";

const BookSchema = new Schema({
    Book_id: { type: Number,
               unique: true,
               required:true },
    BookName:{ type: String,
               unique:true,
               required:true},
  });
  
  const Book = model("Book", BookSchema);
  export default Book;