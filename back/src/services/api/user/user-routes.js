const {
    getAllSchema, getByIdSchema, getAccountSchema, createSchema
} = require('./schema/user-schema');

const {
    getAll, getById, getAccount, create
} = require('./user-controller');

module.exports = function(fastify, req, reply, done) {
    fastify.route({
        method: 'GET',
        url: '/',
        schema: getAllSchema,
        handler: getAll(req, reply),
        preHandler: () => {}  // prehandler logic for access
    });
    fastify.route({
        method: 'GET',
        url: '/:userId',
        schema: getByIdSchema,
        handler: getById(req, reply),
    });
    fastify.route({
        method: 'GET',
        url: '/myaccount/:userId',
        schema: getAccountSchema,
        handler: getAccount(req, reply),
        preHandler: () => {}  // prehandler logic for access
    });
    // it will be in auth routes
    fastify.route({
        method: 'POST',
        url: '/signup',
        schema: createSchema,
        handler: create(req, reply)
    });
    done();
};
