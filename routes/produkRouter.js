const router = require("express").Router();
const Produk = require("../controller/produkController");

router.post("/create", Produk.insertProduk);
router.get("/", Produk.getProduk);
router.get("/:id", Produk.getProdukById);
router.put("/:id", Produk.updateProduk);
router.delete("/:id", Produk.deleteProduk);

module.exports = router;
