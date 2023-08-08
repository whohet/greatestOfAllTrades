const mongoose = require("mongoose");

const counterpartySchema = new mongoose.Schema({
    counterpartyId: { type: String,
               unique: true,
               required:true },
    counterpartyName:{ type: String,
               unique:true,
               required:true},
  });
  
  const Counterparty = mongoose.model("Counterparty", counterpartySchema);
  module.exports = Counterparty;