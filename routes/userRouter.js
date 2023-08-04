const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const crypto = require("crypto");
router.post("/register", async (req, res) => {
    if (!req.body.username) {
      return res.status(400).json({ success: false, message: "Please enter your username" });
    }
    if (!req.body.email) {
      return res.status(400).json({ success: false, message: "Please enter your email address" });
    }
    if (req.body.password < 8) {
      return res.status(400).json({ success: false, message: "Password must be atleast 8 character long" });
    }
    if (req.body.password != req.body.confirmPassword) {
      return res.status(400).json({ success: false, message: "Password and confirm password must be same" });
    }
    const userId = crypto.randomBytes(16).toString("hex");
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      userId: userId,
      role: req.body.role
    });
  
    User.register(user, req.body.password, async (err, user) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }
      
      
      return res.status(200).json({ success: true, message: "Your account has been created successfully." });
    });
  });
  
  router.post("/login", async (req, res) => {
    if (!req.body.username) {
      return res.status(400).json({ success: false, message: "Please enter your username or email." });
    }
    if (!req.body.password) {
      return res.status(400).json({ success: false, message: "Plese enter your password." });
    }
  
    
  
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return res.status(500).json({ success: false, message: err });
      }
  
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "(Username or Email) or Password is Incorrect",
        });
      }
  
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ success: false, message: err });
        }
        return res.status(200).json({
          success: true,
          message: "Authentication successful!",
          user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            userType: user.userType,
            avatarUrl: user.avatarUrl,
          },
        });
      });
    })(req, res);
  });
  
  router.get("/isLoggedIn", (req, res) => {
    if (req.isAuthenticated()) {
      return res.status(200).json({
        success: true,
        user: req.session.passport.user,
        message: "Already Authenticated!",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Please login!",
      });
    }
  });
  
  router.get("/logout", (req, res) => {
    req.logout();
    res.status(200).clearCookie("connect.sid");
    req.session.destroy(function (err) {
      return res.json({
        success: true,
        message: "Logged out!",
      });
    });
  });
  
  module.exports = router;