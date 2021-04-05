const pool = require('../../../db/connection');
// eslint-disable-next-line no-unused-vars
module.exports = class User {
    constructor(steamUsername, steamId, balance, avatar) {
        this.steamUsername = steamUsername;
        this.steamId = steamId;
        this.tradeLink = '';
        this.balance = 0;
        this.avatar = avatar;
        this.inventory = [];
    }

    static async getAll() {
        const sql = 'SELECT * FROM User';
        const result = await pool.query(sql);
        return result.rows;
    }

    static async getById(userId) {
        const sql = `SELECT * FROM User WHERE id = ${userId}`;
        const result = await pool.query(sql);
        return result.rows;
    }

    async save() {
        const sql =
            'INSERT INTO User(steamUsername, steam_id,  avatar) ' +
            // eslint-disable-next-line max-len
            `VALUES (${this.steamUsername}, ${this.steam_id}, ${this.avatar})`;
        return pool.query(sql);
    }

    static async deleteUser(userId) {
        const sql = `DELETE FROM User WHERE id = ${userId}`;
        return pool.query(sql);
    }

    static async updateUser(userId, fields) {
        // create sql script
        let sql = 'UPDATE User SET ';
        const formClause = Object.keys(fields).map(
            key => `${key} = ${fields[key]}`
        );
        sql += formClause.join(', ');
        sql += ` WHERE id = ${userId}`;
        // execute script
        return pool.query(sql);
    }
};
