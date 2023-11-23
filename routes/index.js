const express = require("express")

const router = express.Router()

const Auth = require("./authRouter")
const Merk = require("./merkRouter")
const KotaPeluncuran = require("./kotapeluncuranRouter")
const Produk = require("./produkRouter")
const Review = require("./reviewRouter")
const Rating = require("./ratingRouter")

router.use("/api/auth", Auth)
router.use("/api/merk", Merk)
router.use("/api/kotapeluncuran", KotaPeluncuran)
router.use("/api/produk", Produk)
router.use("/api/review", Review)
router.use("/api/Rating", Rating)

module.exports = router