const db = require("../config/database");
const mysql = require("mysql2/promise");

const InsertProduk = async function (nama_produk, harga, id_merk, id_kota_peluncuran) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute(
            "CALL InsertProduk(?, ?, ?, ?)",
            [nama_produk, harga, id_merk, id_kota_peluncuran]
        );
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetAllProduk = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM produk");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetProdukById = async function (id_produk) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetProdukById(?)", [id_produk]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

const UpdateProduk = async function (id_produk, nama_produk, harga, id_merk, id_kota_peluncuran) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute(
            "CALL UpdateProduk(?, ?, ?, ?, ?)",
            [id_produk, nama_produk, harga, id_merk, id_kota_peluncuran]
        );
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const DeleteProduk = async function (id_produk) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeleteProduk(?)", [id_produk]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertProduk,
    GetAllProduk,
    GetProdukById,
    UpdateProduk,
    DeleteProduk
}