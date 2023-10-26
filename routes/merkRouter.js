const router = require("express").Router()


const Merk = require("../controller/merkController")

router.post("/create", Merk.insertMerk)

module.exports = router