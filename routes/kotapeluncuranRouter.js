const router = require("express").Router()

const KotaPeluncuran = require("../controller/kotapeluncuranController")

router.post("/create", KotaPeluncuran.insertKotaPeluncuran)
router.get("/", KotaPeluncuran.getKotaPeluncuran)
router.get("/:id", KotaPeluncuran.getKotaPeluncuranById)
router.put("/:id", KotaPeluncuran.updateKotaPeluncuran)
router.delete("/:id", KotaPeluncuran.deleteKotaPeluncuran)

module.exports = router
