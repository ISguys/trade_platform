const pool = require('../../../db/connection');
const { v4 } = require('uuid');

class Offer {
    static async getAll() {
        const sql = 'SELECT * FROM "Offers"';
        const rows = await pool.query(sql);
        return rows.rows;
    }

    static async getByGame(gameId) {
        const sql = `SELECT * FROM "Offers" WHERE gameid = '${gameId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async getById(offerId) {
        const sql = `SELECT * FROM "Offers" WHERE orderid = '${offerId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async add(creatorId, gameId, steamBotLink, price) {
        const args = [v4(), creatorId, gameId, steamBotLink, price];
        const sql =
            'INSERT INTO "Offers"(orderid, creatorid, gameid,\
 steambotbink, price) VALUES ($1, $2, $3, $4, $5)';
        await pool.query(sql, args);
        return 'success';
    }

    static async delete(offerId) {
        const sql = `DELETE FROM "Offers" WHERE orderid = '${offerId}'`;
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
 buyerid = '$1', orderdate = NOW() WHERE orderid = '$2'";
        await pool.query(sql, args);
        return 'success';
    }
}

module.exports = Offer;
