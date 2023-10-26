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

module.exports = {
    InsertMerk
}