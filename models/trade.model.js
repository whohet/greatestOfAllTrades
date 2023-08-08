const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
    tradeId: {
           type: String,
           unique: true,
           required:true 
        },
    bookId: {
           type: String,
           required:true
          },
    counterPartyId: {
          type: String,
          required: true,
        },

    securityId: {
          type: String,
          required:true
        },
      
    quantity: {
        type: Number,
        required:true
      },
    status: {
        type: String,
        required:true
      },
    price:{
        type: Number,
        required:true
      },
    tradeDate: {
        type: Date,
        required:true
      },
    settlementDate: {
        type: Date,
        required:true
      },
    buysell:{
        type:String,
        required:true
      }
    }
)

const Trade = mongoose.model("Trade", tradeSchema);

module.exports = Trade;