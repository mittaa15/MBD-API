const Rating = require("../models/rating")

const insertRating = async (req, res) => {
    const { id_produk, penilaian } = req.body
    try {
        const newRating = await Rating.InsertRating(id_produk, penilaian)
        res.status(200).json({
            status: "Sukses!",
            data: {
                newRating
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const getRating = async (req, res) => {
    try {
        const allRating = await Rating.GetAllRating()
        res.status(200).json({
            status: "Sukses!",
            data: {
                allRating
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const getRatingById = async (req, res) => {
    const id_rating = req.params.id
    try {
        const rating = await Rating.GetRatingById(id_rating)
        if (rating && rating.length > 0) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    rating: rating[0]
                }
            })
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Rating tidak ditemukan."
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const updateRating = async (req, res) => {
    const { id } = req.params
    const { id_produk, penilaian } = req.body
    try {
        const updatedRating = await Rating.UpdateRating(id, id_produk, penilaian)
        res.status(200).json({
            status: "Sukses!",
            data: {
                updatedRating
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const deleteRating = async (req, res) => {
    const { id } = req.params
    try {
        await Rating.DeleteRating(id)
        res.status(200).json({
            status: "Sukses!",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

module.exports = {
    insertRating,
    getRating,
    getRatingById,
    updateRating,
    deleteRating
}
