import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    User_id: {
            type: Number,
           unique: true,
           required:true },
    UserName: {
           type: String,
           unique:true,
           required:true},
    UserEmail: {
          type: String,
          required: true,
          unique: true},

    UserRole: {
          type: String,
          required:true}
            
    
      })
  
  const User = model("User", UserSchema);
  export default User;