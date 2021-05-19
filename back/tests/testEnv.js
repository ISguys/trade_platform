/* eslint-disable no-undef */

exports.setupTestEnv = function() {
    // setup fastify server
    const { server } = require('../src/index');
    const pool = require('../src/db/connection');

    beforeEach(async () => {});

    afterAll(async () => {
        // delete all test data
        const sql = `DELETE FROM "Games" WHERE
 title LIKE 'test%' AND description LIKE '%description%'`;
        await pool.query(sql);

        pool.end((err) => {
            if (err) throw err;
            server.log.info('Pool has ended');
        });
    });
    return [server, pool];
};
