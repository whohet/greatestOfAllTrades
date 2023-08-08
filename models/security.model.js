const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
    securityId: {
           type: String,
           unique: true,
           required:true 
        },
    isin: {
           type: String,
           required:true
          },
    cusip: {
          type: String,
          required: true,
        },

    issuer: {
          type: String,
          required:true
        },
    
    status: {
        type: String,
        required:true
      },
    faceValue:{
        type: Number,
        required:true
      },
    maturityDate: {
        type: Date,
        required:true
      },
    coupon: {
        type: Number,
        required:true
      },
    type:{
        type:String,
        required:true
      }
    }
)

const Security = mongoose.model("Security", securitySchema);

module.exports = Security;