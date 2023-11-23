const router = require("express").Router()

const Rating = require("../controller/ratingController")

router.post("/create", Rating.insertRating)
router.get("/", Rating.getRating)
router.get("/:id", Rating.getRatingById)
router.put("/:id", Rating.updateRating)
router.delete("/:id", Rating.deleteRating)

module.exports = router
