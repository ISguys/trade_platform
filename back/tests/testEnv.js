exports.setupTestEnv = function() {
    // setup fastify server
    const { server } = require('../src/index');
    const pool = require('../src/db/connection');
    return [server, pool];
};
