const Produk = require("../models/produk");

const insertProduk = async (req, res) => {
    const { nama_produk, harga, id_merk, id_kota_peluncuran } = req.body;
    try {
        const newProduk = await Produk.InsertProduk(nama_produk, harga, id_merk, id_kota_peluncuran);
        res.status(200).json({
            status: "Sukses!",
            data: {
                newProduk
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const getProduk = async (req, res) => {
    try {
        const allProduk = await Produk.GetAllProduk();
        res.status(200).json({
            status: "Sukses!",
            data: {
                allProduk
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const getProdukById = async (req, res) => {
    const id_produk = req.params.id;
    try {
        const produk = await Produk.GetProdukById(id_produk);
        if (produk) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    produk
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Produk tidak ditemukan."
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const updateProduk = async (req, res) => {
    const { id } = req.params;
    const { nama_produk, harga, id_merk, id_kota_peluncuran } = req.body;
    try {
        const updatedProduk = await Produk.UpdateProduk(id, nama_produk, harga, id_merk, id_kota_peluncuran);
        res.status(200).json({
            status: "Sukses!",
            data: {
                updatedProduk
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const deleteProduk = async (req, res) => {
    const { id } = req.params;
    try {
        await Produk.DeleteProduk(id);
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
    insertProduk,
    getProduk,
    getProdukById,
    updateProduk,
    deleteProduk
}
