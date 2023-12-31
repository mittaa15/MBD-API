const Merk = require("../models/merk")

const insertMerk = async (req, res) => {
    const { nama_merk } = req.body
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

const getMerk = async (req, res) => {
    try {
        const allMerk = await Merk.GetAllMerk()
        res.status(200).json({
            status: "Sukses!",
            data: {
                allMerk
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const getMerkById = async (req, res) => {
    const id_merk = req.params.id; // Ambil ID merk dari URL parameter
    try {
        const merk = await Merk.GetMerkById(id_merk);
        if (merk) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    merk
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Merk tidak ditemukan."
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const updateMerk = async (req, res) => {
    const { id } = req.params
    const { nama_merk } = req.body
    try {
        const updatedMerk = await Merk.UpdateMerk(id, nama_merk)
        res.status(200).json({
            status: "Sukses!",
            data: {
                updatedMerk
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const deleteMerk = async (req, res) => {
    const { id } = req.params
    try {
        await Merk.DeleteMerk(id)
        res.status(200).json({
            status: "Sukses!",
            data: null  // Data dihapus, maka tidak ada respons data.
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}
    
    module.exports = {
        insertMerk,
        getMerk,
        getMerkById,
        updateMerk,
        deleteMerk
    }    