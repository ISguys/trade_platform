const { default: fastify } = require('fastify');
const GameModel = require('./model');

exports.getAll = async function(request, reply) {
    try {
        const games = await GameModel.getAll();
        console.log(games);
        if (games.length < 1) {
            reply.send([]);
        }
        return reply.send(games);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
exports.getGameById = async function(request, reply) {
    try {
        const { gameId } = request.params;
        const game = await GameModel.getById(gameId);
        if (!game) {
            return reply.send({ 'message': 'No game' });
        }
        return reply.send(game);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.addGame = async function(request, reply) {
    try {
        const {
            steamPrice,
            title,
            steamLink,
            imageLink,
            description,
        } = request.body;
        const result = await GameModel.addGame(
            steamPrice,
            title,
            steamLink,
            imageLink,
            description
        );
        return reply.send(result);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.updateGame = async function(request, reply) {
    try {
        const { gameId, fields } = request.body;
        const result = await GameModel.updateGame(gameId, fields);
        return reply.send(result);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.deleteGame = async function(request, reply) {
    try {
        const { gameId } = request.body;
        const result = await GameModel.deleteGame(gameId);
        return reply.send(result);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

