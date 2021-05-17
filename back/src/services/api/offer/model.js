const pool = require('../../../db/connection');
const { v4 } = require('uuid');

class Offer {
    static async getAll() {
        const sql = 'SELECT * FROM "Offers"';
        const rows = await pool.query(sql);
        return rows.rows;
    }

    static async getById(offerId) {
        const sql = `SELECT * FROM "Offers" WHERE order_id = '${offerId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async add(creatorId, gameId, steamBotLink, price) {
        const createdAt = new Date().toISOString().split('T')[0];
        const args = [v4(), creatorId, gameId, steamBotLink, price, createdAt];
        const sql =
            'INSERT INTO "Offers"(order_id, creator_id, game_id,\
 steam_bot_link, price, created_at) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sql, args);
        return 'success';
    }

    static async delete(offerId) {
        const sql = `DELETE FROM "Offers" WHERE order_id = '${offerId}'`;
        await pool.query(sql);
        return 'success';
    }

    static async getActive() {
        const sql = 'SELECT * FROM "Offers" WHERE status = TRUE';
        const rows = await pool.query(sql);
        return rows.rows;
    }

    static async close(offerId, buyerId) {
        const date = new Date().toISOString().split('T')[0];
        const args = [buyerId, date, offerId];
        const sql =
            "UPDATE \"Offers\" SET status = FALSE,\
 buyer_id = '$1', order_date = '$2' WHERE order_id = '$3'";
        await pool.query(sql, args);
        return 'success';
    }
}

module.exports = Offer;
