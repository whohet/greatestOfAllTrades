const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    userId: {
           type: String,
           unique: true,
           required:true 
        },
    username: {
           type: String,
           unique:true,
           required:true
          },
    email: {
          type: String,
          required: true,
          unique: true
        },

    role: {
          type: String,
          required:true
        },
      
    password: {
        type: String,
      },

    }
)

userSchema.plugin(passportLocalMongoose, { usernameQueryFields: ["email"] });
const User = mongoose.model("User", userSchema);

module.exports = User;