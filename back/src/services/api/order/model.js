const pool = require('../../../db/connection');
const { v4 } = require('uuid');

class Order {
    static async getAll() {
        const sql = 'SELECT * FROM "Orders"';
        const rows = await pool.query(sql);
        return rows.rows;
    }

    static async getById(orderId) {
        const sql = `SELECT * FROM "Orders" WHERE order_id = '${orderId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async add(sellerId, buyerId, orderId, type) {
        const date = new Date().toISOString().split('T')[0];
        const args = [v4(), sellerId, buyerId, orderId, date, type];
        const sql =
            'INSERT INTO "Orders"(id, seller_id, buyer_id, order_id,\
 date, type) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sql, args);
        return 'success';
    }

    static async delete(orderId) {
        const sql = `DELETE FROM "Orders" WHERE id = '${orderId}'`;
        await pool.query(sql);
        return 'success';
    }
}

module.exports = Order;
