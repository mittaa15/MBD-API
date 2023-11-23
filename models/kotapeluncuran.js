const db = require("../config/database");
const mysql = require("mysql2/promise");

const InsertKotaPeluncuran = async function (nama_kota) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL InsertKotaPeluncuran(?)", [nama_kota]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetAllKotaPeluncuran = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM kota_peluncuran");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetKotaPeluncuranById = async function (id_kota_peluncuran) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetKotaPeluncuranById(?)", [id_kota_peluncuran]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

const UpdateKotaPeluncuran = async function (id_kota_peluncuran, nama_kota) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL UpdateKotaPeluncuran(?, ?)", [id_kota_peluncuran, nama_kota]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const DeleteKotaPeluncuran = async function (id_kota_peluncuran) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeleteKotaPeluncuran(?)", [id_kota_peluncuran]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertKotaPeluncuran,
    GetAllKotaPeluncuran,
    GetKotaPeluncuranById,
    UpdateKotaPeluncuran,
    DeleteKotaPeluncuran
}