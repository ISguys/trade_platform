const pool = require('../../../db/connection');

class Game {
    static async getAll() {
        const sql = 'SELECT * FROM Game';
        pool.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
    }

    static async getById(gameId) {
        const sql = `SELECT * FROM Game WHERE game_id = ${gameId}`;
        pool.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
    }

    static async addGame(steamPrice, title, steamLink, imageLink, description) {
        const args = [steamPrice, title, steamLink, imageLink, description];
        const sql =
            'INSERT INTO Game(steam_price, title, steam_link, \
image_link, description) VALUES ($1, $2, $3, $4, $5, $6)';
        pool.query(sql, args, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
    }

    static async deleteGame(gameId) {
        const sql = `DELETE FROM Game WHERE game_id = ${gameId}`;
        pool.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
    }

    static async updateGame(gameId, fields) {
        // create sql script
        let sql = 'UPDATE Game SET ';
        const formClause = Object.keys(fields).map(
            (key) => `${key} = \
${fields[key]}`
        );
        sql += formClause.join(', ');
        sql += ` WHERE game_id = ${gameId}`;
        // execute script
        pool.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
    }
}

module.exports = Game;
