const pool = require('../../../db/connection');

class Game {
    static async getAll() {
        const sql = 'SELECT * FROM "Games"';
        const rows = await pool.query(sql);
        return rows.rows;
    }

    static async getById(gameId) {
        const sql = `SELECT * FROM "Games" WHERE game_id = ${gameId}`;
        return pool.query(sql);
    }

    static async addGame(steamPrice, title, steamLink, imageLink, description) {
        const args = [steamPrice, title, steamLink, imageLink, description];
        const sql =
            'INSERT INTO "Games"(steam_price, title, steam_link, \
image_link, description) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sql, args);
        return 'success';
    }

    static async deleteGame(gameId) {
        const sql = `DELETE FROM "Games" WHERE game_id = ${gameId}`;
        await pool.query(sql);
        return 'success';
    }

    static async updateGame(gameId, fields) {
        // create sql script
        let sql = 'UPDATE "Games" SET ';
        const formClause = Object.keys(fields).map(
            (key) => `${key} = \
${fields[key]}`
        );
        sql += formClause.join(', ');
        sql += ` WHERE game_id = ${gameId}`;
        // execute script
        await pool.query(sql);
        return 'success';
    }
}

module.exports = Game;
