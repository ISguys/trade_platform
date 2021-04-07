const { Pool } = require('pg');

// eslint-disable-next-line no-unused-vars
class Game {
    constructor(config) {
        this.connection = new Pool(config);
    }

    getAll() {
        const sql = 'SELECT * FROM Game';
        this.connection.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
        this.connection.end();
    }

    getById(gameId) {
        const sql = `SELECT * FROM Game WHERE game_id = ${gameId}`;
        this.connection.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
        this.connection.end();
    }

    addGame(steamPrice, title, steamLink, imageLink, description) {
        const args = [steamPrice, title, steamLink, imageLink, description];
        const sql =
            'INSERT INTO Game(steam_price, title, steam_link, \
image_link, description) VALUES ($1, $2, $3, $4, $5, $6)';
        this.connection.query(sql, args, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
        this.connection.end();
    }

    deleteGame(gameId) {
        const sql = `DELETE FROM Game WHERE game_id = ${gameId}`;
        this.connection.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
        this.connection.end();
    }

    updateGame(gameId, fields) {
        // create sql script
        let sql = 'UPDATE Game SET ';
        const formClause = Object.keys(fields).map(
            (key) => `${key} = \
${fields[key]}`
        );
        sql += formClause.join(', ');
        sql += ` WHERE game_id = ${gameId}`;
        // execute script
        this.connection.query(sql, (err, res) => {
            if (err) throw err;
            return res.rows;
        });
        this.connection.end();
    }
}
