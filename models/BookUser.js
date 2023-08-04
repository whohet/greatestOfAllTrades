import { Schema, model } from "mongoose";


const BookUserSchema = new Schema({
    Book_id: { type: Number,
               unique: true,
               required:true },
    User_id: { type: Number,
               unique: true,
               required:true },
    
  });
  
  const BookUser = model("BookUser", BookUserSchema);
  export default BookUser;