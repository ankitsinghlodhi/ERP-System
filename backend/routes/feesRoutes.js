const express = require("express");
const router = express.Router();
const { createOrder, verifyPayment } = require("../controllers/feesController");
const { auth } = require("../middlewares/authMiddleware");
const { razorpayWebhook } = require("../controllers/webhookController");


router.post(
  "/razorpay",
  express.raw({ type: "application/json" }),
  razorpayWebhook
);
router.post("/create-order", auth, createOrder);
router.post("/verify-payment", auth, verifyPayment);

module.exports = router;
