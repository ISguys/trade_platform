const Offer = require('./model');

exports.getAll = async function(request, reply) {
    try {
        const offers = await Offer.getAll();
        if (offers.length < 1) {
            reply.send([]);
        }
        return reply.send(offers);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.getByName = async (request, reply) => {
    const { gameId } = request.params;
    try {
        const offers = await Offer.getByGame(gameId);
        if (offers.length < 1) {
            reply.send([]);
        }
        return reply.send(offers);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.getOfferById = async function(request, reply) {
    try {
        const { offerId } = request.params;
        const offer = await Offer.getById(offerId);
        if (!offer) {
            return reply.send({ message: 'No offer' });
        }
        return reply.send(offer);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.addOffer = async function(request, reply) {
    try {
        const { creatorId, gameId, steamBotLink, price } = request.body;
        const result = await Offer.add(creatorId, gameId, steamBotLink, price);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.deleteOffer = async function(request, reply) {
    try {
        const { offerId } = request.params;
        const result = await Offer.delete(offerId);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
