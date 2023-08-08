const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Trade = require("../models/trade.model");
const Security = require("../models/security.model");
const crypto = require("crypto");

router.get("/:tradeId", async (req, res) => {
    try {
      const tradeId = req.params.tradeId;
      console.log(tradeId);
      const trade = await Trade.findOne(
        {
          tradeId: tradeId,
        }
      );
      return res.status(200).json({
        success: true,
        tradeobj: trade,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error. Please try again.",
        
      });
    }
  });

  router.post("/security/:tradeId", async (req, res) => {
    try {
      const tradeId = req.params.tradeId;
      console.log(tradeId);
      const trade = await Trade.findOne(
        {
          tradeId: tradeId,
        }
      );
        
      const security=await Security.findOne(
        {
            securityId:trade.securityId,
        }
      );
      return res.status(200).json({
        success: true,
        securityobj: security,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error. Please try again.",
        
      });
    }
  });

  router.post("/register", async (req, res) => {
    
    const tradeId = crypto.randomBytes(16).toString("hex");
    let trade = new Trade({
      tradeId: tradeId,
      bookId: req.body.bookId,
      counterPartyId: req.body.counterPartyId,
      securityId: req.body.securityId,
      quantity: req.body.quantity,
      buysell:req.body.buysell,
      tradeDate:req.body.tradeDate,
      settlementDate:req.body.settlementDate,
      price:req.body.price,
      status:req.body.status
    });
    try{
        trade = await trade.save();
        return res.status(200).json({
            success: true,
            message: "Trade created successfully"
        });
    }
    catch (err) {
        console.log(err);

        console.log(trade);
        return res.status(500).json({
          success: false,
          message: "Internal server error. Please try again",
        });
      }

  });
 
  
  module.exports = router;