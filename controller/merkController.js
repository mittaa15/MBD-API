const Merk = require("../models/merk")

const insertMerk = async(req, res) => {
    const {nama_merk} = req.body
    try {
        const newMerk = await Merk.InsertMerk(nama_merk)
        res.status(200).json({
            status: "Sukses!",
            data: {
                newMerk
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

module.exports = {
    insertMerk
}