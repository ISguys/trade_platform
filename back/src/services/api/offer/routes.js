const schemes = require('./schemes');
const { getAll, getByName, getOfferById, addOffer, deleteOffer } = require('./controller');

module.exports = function(fastify, opts, done) {
    // get all rows from table Offers
    fastify.get('/offer', { schema: schemes.getAll }, getAll);

    fastify.get('/offer/gameId', getByName);
    // get offer by id
    fastify.get(
        '/offer/:orderId',
        { schema: schemes.getOfferById },
        getOfferById
    );
    // add new offer
    fastify.post(
        '/offer/create',
        {
            schema: schemes.addOffer,
            preValidation: [fastify.tokenValidation],
        },
        addOffer
    );
    // delete offer
    fastify.delete(
        '/offer/:orderId',
        {
            schema: schemes.deleteOffer,
            preValidation: [fastify.tokenValidation],
        },
        deleteOffer
    );
    done();
};
