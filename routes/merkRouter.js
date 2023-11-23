const router = require("express").Router()

const Merk = require("../controller/merkController")
const autentikasi = require("../middleware/authenticate")

router.use(autentikasi)
router.post("/create", Merk.insertMerk)
router.get("/", Merk.getMerk)
router.get("/:id", Merk.getMerkById)
router.put("/:id", Merk.updateMerk)
router.delete("/:id", Merk.deleteMerk)

module.exports = router
