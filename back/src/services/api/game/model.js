const pool = require('../../../db/connection');
const { v4 } = require('uuid');

class Game {
    static async getAll(page) {
        let pageCount = page
        if(!page){
            pageCount = 1
        }
        const sql = `SELECT * FROM "Games" ORDER BY game_id ASC\
 OFFSET ${12 * (pageCount - 1)} LIMIT 12`;
        const rows = await pool.query(sql);
        return rows.rows;
    }

    static async getById(gameId) {
        const sql = `SELECT * FROM "Games" WHERE game_id = '${gameId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async getByImg(gameImg) {
        const sql = `SELECT * FROM "Games" WHERE image_link = '${gameImg}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    static async add(steamPrice, title, steamLink, imageLink, description) {
        const args = [
            v4(),
            steamPrice,
            title,
            steamLink,
            imageLink,
            description,
        ];
        const sql =
            'INSERT INTO "Games"(game_id, steam_price, title, steam_link, \
image_link, description) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sql, args);
        return 'success';
    }

    static async delete(gameId) {
        const sql = `DELETE FROM "Games" WHERE game_id = '${gameId}'`;
        await pool.query(sql);
        return 'success';
    }

    static async update(gameId, fields) {
        // create sql script
        let sql = 'UPDATE "Games" SET ';
        const formClause = Object.keys(fields).map(
            (key) => `${key} = \
'${fields[key]}'`
        );
        sql += formClause.join(', ');
        sql += ` WHERE game_id = '${gameId}'`;
        // execute script
        await pool.query(sql);
        return 'success';
    }
}

module.exports = Game;
