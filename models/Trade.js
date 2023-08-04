import { Schema, model } from "mongoose";


const TradeSchema = new Schema({
    Trade_id: { type: Number,
        unique: true,
        required:true },
    Book_id: { type: Number,
           unique: true,
           required:true },
    Counterparty_id: { type: Number,
            unique: true,
            required:true },
    Security_id: { type: Number,
                unique: true,
                required:true },
    Quantity: { type: Number,
        required: true
    },
    Trade_Status: { type: String,
        required: true
    },
    Price: { type: Number,
        required: true
    },
    Buy_Sell: { type: String,
        required: true
    },
    TradeDate: { type: Date,
        required: true
    },
    SettlementDate: { type: Date,
        required: true
    },

    
  });
  
  const Trade = model("Trade", TradeSchema);
  export default Trade;