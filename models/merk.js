const db = require("../config/database")
const mysql = require("mysql2/promise")

const InsertMerk = async function (nama_merk) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("CALL InsertMerk(?)", [nama_merk])
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

const GetAllMerk = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM merk");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetMerkById = async function (id_merk) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("CALL GetMerkById(?)", [id_merk])
        return rows
    } catch (error) {
        throw error
    } finally {
        connection.end()
    }
}

const UpdateMerk = async function (id_merk, nama_merk) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("CALL UpdateMerk(?, ?)", [id_merk, nama_merk])
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

const DeleteMerk = async function (id_merk) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("CALL DeleteMerk(?)", [id_merk])
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

module.exports = {
    InsertMerk,
    GetAllMerk,
    GetMerkById,
    UpdateMerk,
    DeleteMerk
}
