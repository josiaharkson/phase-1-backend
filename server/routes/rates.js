const express = require("express");
const router = express.Router();

// Controller Middleware
const { getRates } = require("../controllers/rates");

// REQUEST TYPE -  GET
// RESPONSE TYPE -  JSON DATA
// ROUTE -  /api/rates
router.get("/", getRates);

module.exports = router;
