
const pool = require('../../../db/connection');
const { v4 } = require('uuid');

class Offer {
    static async getAll() {
        const sql = 'SELECT * FROM "Offers" inner join "Users" on "Offers"."creator_id" = "Users"."id"';
        const rows = await pool.query(sql);
        return rows.rows;
    }

    static async getByGame(gameId) {
        const sql = `SELECT * FROM "Offers" inner join "Users" on "Offers"."creator_id" = "Users"."id" WHERE game_id = '${gameId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async getByUser(userId) {
        const sql = `SELECT * FROM "Offers" inner join "Games" on "Offers"."game_id" = "Games"."game_id" WHERE creator_id = '${userId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }
    static async getById(offerId) {
        const sql = `SELECT * FROM "Offers" WHERE order_id = '${offerId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async add(creatorId, gameId, steamBotLink, price) {
        const args = [v4(), creatorId, gameId, steamBotLink, price];
        const sql =
            'INSERT INTO "Offers"(order_id, creator_id, game_id,\
 steam_bot_link, price) VALUES ($1, $2, $3, $4, $5)';
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
        const args = [buyerId, offerId];
        const sql =
            "UPDATE \"Offers\" SET status = FALSE,\
 buyer_id = '$1', order_date = NOW() WHERE order_id = '$2'";
        await pool.query(sql, args);
        return 'success';
    }
}

module.exports = Offer;
