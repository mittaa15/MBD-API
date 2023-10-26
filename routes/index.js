const express = require("express")

const router = express.Router()

const Merk = require("./merkRouter")

router.use("/api/merk", Merk)

module.exports = router