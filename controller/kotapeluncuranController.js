const KotaPeluncuran = require("../models/kotapeluncuran")

const insertKotaPeluncuran = async (req, res) => {
    const { nama_kota } = req.body
    try {
        const newKotaPeluncuran = await KotaPeluncuran.InsertKotaPeluncuran(nama_kota)
        res.status(200).json({
            status: "Sukses!",
            data: {
                newKotaPeluncuran
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const getKotaPeluncuran = async (req, res) => {
    try {
        const allKotaPeluncuran = await KotaPeluncuran.GetAllKotaPeluncuran()
        res.status(200).json({
            status: "Sukses!",
            data: {
                allKotaPeluncuran
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const getKotaPeluncuranById = async (req, res) => {
    const id_kota_peluncuran = req.params.id; // Ambil ID kota_peluncuran dari URL parameter
    try {
        const kota_peluncuran = await KotaPeluncuran.GetKotaPeluncuranById(id_kota_peluncuran);
        if (kota_peluncuran) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    kota_peluncuran
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Kota peluncuran tidak ditemukan."
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const updateKotaPeluncuran = async (req, res) => {
    const { id } = req.params
    const { nama_kota } = req.body
    try {
        const updatedKotaPeluncuran = await KotaPeluncuran.UpdateKotaPeluncuran(id, nama_kota)
        res.status(200).json({
            status: "Sukses!",
            data: {
                updatedKotaPeluncuran
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const deleteKotaPeluncuran = async (req, res) => {
    const { id } = req.params
    try {
        await KotaPeluncuran.DeleteKotaPeluncuran(id)
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
    insertKotaPeluncuran,
    getKotaPeluncuran,
    getKotaPeluncuranById,
    updateKotaPeluncuran,
    deleteKotaPeluncuran
}
