const express = require("express");
const router = express.Router();
const EmailCtrl = require("../controllers/emailController");

router.post("/send-email", EmailCtrl.sendMail);

module.exports = router;
