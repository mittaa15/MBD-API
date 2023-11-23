const router = require("express").Router();
const Review = require("../controller/reviewController");

router.post("/create", Review.insertReview);
router.get("/", Review.getReviews);
router.get("/:id", Review.getReviewById);
router.put("/:id", Review.updateReview);
router.delete("/:id", Review.deleteReview);

module.exports = router;
