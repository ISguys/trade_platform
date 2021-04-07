const { default: fastify } = require('fastify');
const GameModel = require('./model');

const controllers = {};

controllers.getAll = async function () {
    try {
        return await GameModel.getAll();
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

controllers.getGameById = async function (request) {
    try {
        const { gameId } = request.query;
        return await GameModel.getById(gameId);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

controllers.addGame = async function (request) {
    try {
        const {
            steamPrice,
            title,
            steamLink,
            imageLink,
            description,
        } = request.body;
        return await GameModel.addGame(
            steamPrice,
            title,
            steamLink,
            imageLink,
            description
        );
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

controllers.updateGame = async function (request) {
    try {
        const { gameId, fields } = request.body;
        return await GameModel.updateGame(gameId, fields);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

controllers.deleteGame = async function (request) {
    try {
        const { gameId } = request.body;
        return await GameModel.deleteGame(gameId);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

module.exports = controllers;
