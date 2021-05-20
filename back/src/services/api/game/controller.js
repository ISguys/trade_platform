const Game = require('./model');

exports.getAll = async function(request, reply) {
    try {
        const games = await Game.getAll();
        if (games.length < 1) {
            reply.send([]);
        }
        return reply.send(games);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
exports.getGameById = async function(request, reply) {
    try {
        const { gameId } = request.query;
        const game = await Game.getById(gameId);
        console.log(game)
        if (!game[0]) {
            return reply.send({ message: 'No game' });
        }
        return reply.send(game[0]);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.gameSearch = async function(request, reply) {
    const gameName = request.body.gameName;
    try {
        const games = await Game.getAll();
        const result = games.filter((prod) => {
            if (prod.title.indexOf(gameName) > -1) {
                return true;
            } else {
                return false;
            }
        });
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.addGame = async function(request, reply) {
    const {
        steamPrice,
        title,
        steamLink,
        imageLink,
        description,
    } = request.body;
    try {
        const result = await Game.add(
            steamPrice,
            title,
            steamLink,
            imageLink,
            description
        );
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.updateGame = async function(request, reply) {
    try {
        const { fields } = request.body;
        const { gameId } = request.query;
        const result = await Game.update(gameId, fields[0]);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.deleteGame = async function(request, reply) {
    try {
        const { gameId } = request.query;
        const result = await Game.delete(gameId);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
