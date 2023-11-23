const db = require("../config/database")
const mysql = require("mysql2/promise")

const InsertRating = async function (id_produk, penilaian) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("CALL InsertRating(?, ?)", [id_produk, penilaian])
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

const GetAllRating = async function () {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("SELECT * FROM rating")
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

const GetRatingById = async function (id_rating) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("SELECT * FROM rating WHERE id_rating = ?", [id_rating])
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

const UpdateRating = async function (id_rating, id_produk, penilaian) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("CALL UpdateRating(?, ?, ?)", [id_rating, id_produk, penilaian])
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

const DeleteRating = async function (id_rating) {
    const connection = await mysql.createConnection(db)
    try {
        const [rows] = await connection.execute("CALL DeleteRating(?)", [id_rating])
        return rows
    } catch (error) {
        await connection.rollback()
        throw error
    } finally {
        connection.end()
    }
}

module.exports = {
    InsertRating,
    GetAllRating,
    GetRatingById,
    UpdateRating,
    DeleteRating
}
