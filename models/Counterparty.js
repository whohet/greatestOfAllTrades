import { Schema, model } from "mongoose";


const CounterpartySchema = new Schema({
    Counterparty_id: { type: Number,
                unique: true,
                required:true },
    Counterparty_name: { type: String,
        unique: true,
        required: true
    },

    
  });
  
  const Counterparty = model("Counterparty", CounterpartySchema);
  export default Counterparty;