const express = require("express");
const router = express.Router();
const ratesRoute = require("./rates");

router.use("/rates", ratesRoute);

module.exports = router;
