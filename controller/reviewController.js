const Review = require("../models/review");

const insertReview = async (req, res) => {
    const { id_produk, review } = req.body;
    try {
        const newReview = await Review.InsertReview(id_produk, review);
        res.status(200).json({
            status: "Sukses!",
            data: {
                newReview
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const getReviews = async (req, res) => {
    try {
        const allReviews = await Review.GetAllReviews();
        res.status(200).json({
            status: "Sukses!",
            data: {
                allReviews
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const getReviewById = async (req, res) => {
    const id_review = req.params.id;
    try {
        const review = await Review.GetReviewById(id_review);
        if (review) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    review
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Review tidak ditemukan."
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const updateReview = async (req, res) => {
    const { id } = req.params
    const { id_produk, review } = req.body;
    try {
        const updatedReview = await Review.UpdateReview(id, id_produk, review);
        res.status(200).json({
            status: "Sukses!",
            data: {
                updatedReview
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        await Review.DeleteReview(id);
        res.status(200).json({
            status: "Sukses!",
            data: null
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

module.exports = {
    insertReview,
    getReviews,
    getReviewById,
    updateReview,
    deleteReview
}
