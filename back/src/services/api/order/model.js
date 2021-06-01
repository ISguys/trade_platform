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
        const args = [v4(), sellerId, buyerId, orderId, type];
        const sql =
            'INSERT INTO "Orders"(id, seller_id, buyer_id, order_id,\
 type) VALUES ($1, $2, $3, $4, $5)';
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
