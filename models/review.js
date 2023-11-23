const db = require("../config/database");
const mysql = require("mysql2/promise");

const InsertReview = async function (id_produk, review) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL InsertReview(?, ?)", [id_produk, review]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetAllReviews = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM review");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetReviewById = async function (id_review) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetReviewById(?)", [id_review]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

const UpdateReview = async function (id_review, id_produk, review) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL UpdateReview(? , ?, ?)", [ id_review, id_produk, review]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const DeleteReview = async function (id_review) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeleteReview(?)", [id_review]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertReview,
    GetAllReviews,
    GetReviewById,
    UpdateReview,
    DeleteReview
}
