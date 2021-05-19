const pool = require('../../../db/connection');
const { v4 } = require('uuid');

module.exports = class User {
    constructor(steamUsername, steamId, avatar) {
        this.id = v4();
        this.steamUsername = steamUsername;
        this.steamId = steamId;
        this.tradeLink = " 'https://steamcommunity.com' ";
        this.balance = 0;
        this.avatar = avatar;
        this.inventory = '';
        this.role = 'user';
    }

    static async getAll() {
        const sql = 'SELECT * FROM "Users"';
        const result = await pool.query(sql);
        return result.rows;
    }

    static async findById(userId) {
        const sql = `SELECT * FROM "Users" WHERE "steam_id"='${userId}'`;
        const result = await pool.query(sql);
        return result.rows;
    }

    async save() {
        const sql =
            // eslint-disable-next-line max-len
            'INSERT INTO "Users" (id, steam_name, trade_link, balance, steam_id, ava_link, inventory, role)' +
            ` VALUES ('${this.id}','${this.steamUsername}', ${this.tradeLink}, ${this.balance},` +
            `'${this.steamId}', '${this.avatar}', '{${this.inventory}}', '${this.role}')`;
        return pool.query(sql);
    }

    static async deleteUser(userId) {
        const sql = `DELETE FROM "Users" WHERE "id" = '${userId}'`;
        return pool.query(sql);
    }

    static async updateUser(userId, fields) {
        // create sql script
        let sql = 'UPDATE "Users" SET ';
        const formClause = Object.keys(fields).map(
            (key) => `${key} = ${fields[key]}`
        );
        sql += formClause.join(', ');
        sql += ` WHERE id = ${userId}`;
        // execute script
        return pool.query(sql);
    }
};
