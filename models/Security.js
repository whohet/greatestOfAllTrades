import { Schema, model } from "mongoose";


const SecuritySchema = new Schema({
    Security_id: { type: Number,
                unique: true,
                required:true },
    ISIN: { type: Number,
        unique: true,
        required: true
    },
    CUSIP: { type: Number,
        unique: true,
        required: true
    },
    Issuer: { type: String,
        required: true
    },
    MaturityDate: { type: Date,
        required: true
    },
    Coupon: { type: String,
        required: true
    },
    Type: { type: String,
        required: true
    },
    FaceValue: { type: String,
        required: true
    },
    Security_Status: { type: String,
        required: true
    },

    
  });
  
  const Security = model("Security", SecuritySchema);
  export default Security;