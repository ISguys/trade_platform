const {
    getAllSchema, getByIdSchema, getAccountSchema
} = require('./schema/user-schema');

const {
    getAll, getById, getAccount
} = require('./user-controller');

module.exports = async function(fastify) {
    fastify.route({
        method: 'GET',
        url: '/users/',
        schema: getAllSchema,
        preValidation: [fastify.tokenValidation],
        handler: getAll,
    });
    fastify.route({
        method: 'GET',
        url: '/users/:userId',
        schema: getByIdSchema,
        preValidation: [fastify.tokenValidation],
        handler: getById,
    });
    fastify.route({
        method: 'GET',
        url: '/myaccount/:userId',
        schema: getAccountSchema,
        preValidation: [fastify.tokenValidation],
        handler: getAccount,
    });

};
