<<<<<<< HEAD
// eslint-disable-next-line no-unused-vars
const schemes = require('./schemes');
const {
    getAll,
    getByGame,
    getOfferById,
    getByUser,
    addOffer,
    deleteOffer,
} = require('./controller');

module.exports = function (fastify, opts, done) {
    // get all rows from table Offers
    fastify.get('/offer', /*{ schema: schemes.getAll },*/ getAll);

    fastify.get('/offer/byGame/:gameId', getByGame);
    fastify.get('/offer/byUser/:userId', getByUser);
    // get offer by id
    fastify.get(
        '/offer/:orderId',
        //{ schema: schemes.getOfferById },
        getOfferById
    );
    // add new offer
    fastify.post(
        '/offer/create',
        {
            //schema: schemes.addOffer,
            preValidation: [fastify.tokenValidation],
        },
        addOffer
    );
    // delete offer
    fastify.delete(
        '/offer/:orderId',
        {
            //schema: schemes.deleteOffer,
            preValidation: [fastify.tokenValidation],
        },
        deleteOffer
    );
    done();
};
=======
// eslint-disable-next-line no-unused-vars
const schemes = require('./schemes');
const {
    getAll,
    getByGame,
    getOfferById,
    addOffer,
    deleteOffer,
} = require('./controller');

module.exports = function (fastify, opts, done) {
    // get all rows from table Offers
    fastify.get('/offer', { schema: schemes.getAll }, getAll);

    fastify.get('/offer/byGame/:gameid',
        { schema: schemes.getByGame }, getByGame);
    // get offer by id
    fastify.get(
        '/offer/:orderid',
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
        '/offer/:orderid',
        {
            schema: schemes.deleteOffer,
            preValidation: [fastify.tokenValidation],
        },
        deleteOffer
    );
    done();
};
>>>>>>> 0c395a6d77a68d0974dc0db5500a0b9d8b9e112f
