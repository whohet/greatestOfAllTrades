const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Trade = require("../models/trade.model");
const Security = require("../models/security.model");
const crypto = require("crypto");
const User = require("../models/user.model");
const Book = require("../models/book.model")
const { log } = require("console");

router.get("/all", async (req, res) => {
    try {
        const user=await User.findOne({
            username:req.body.username
        })
        //username ->books->trades->security
        const book=await Book.find({
            userId:user.userId
        })
        console.log("book")
        console.log(book)
        let trades=[]
        for(var i=0;i<book.length;i++)
        {
            trades.push(await Trade.find({
                bookId:book[i].bookId
            }));
            
        }
       

        console.log("trade")
        console.log(trades)
        let securities = [];
        for(var i=0;i<trades.length;i++)
        {
            for(var j=0;j<trades[i].length;j++)
            {
                const security = await Security.findOne(
                {
                    securityId:trades[i][j].securityId
                })
                if(security==null)
                    continue;
                securities.push(security)
            }
        }
        
      return res.status(200).json({
        success: true,
        securities,
      });
    } catch (err) {
        console.log(err)
      return res.status(500).json({
        success: false,
        message: "Internal server error. Please try again.",
    
      });
    }
  });

  router.get("/trades", async (req, res) => {
    try {
      const trades=await Trade.find({
        securityId:req.body.securityId
      })
      return res.status(200).json({
        success: true,
        trades,
      });
    } catch (err) {
        console.log(err);
      return res.status(500).json({
        success: false,
        message: "Internal server error. Please try again.",
        
      });
    }
  });

  router.post("/register", async (req, res) => {
    
    const securityId = crypto.randomBytes(16).toString("hex");
    let security = new Security({
      securityId: securityId,
      isin: req.body.isin,
      cusip: req.body.cusip,
      issuer: req.body.issuer,
      maturityDate: req.body.maturityDate,
      coupon:req.body.coupon,
      type:req.body.type,
      faceValue:req.body.faceValue,
      status:req.body.status
    });
    try{
        security = await security.save();
        return res.status(200).json({
            success: true,
            message: "Security created successfully"
        });
    }
    catch (err) {
        console.log(err);

        console.log(security);
        return res.status(500).json({
          success: false,
          message: "Internal server error. Please try again",
        });
      }

  });
  
  module.exports = router;