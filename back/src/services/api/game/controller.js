<<<<<<< HEAD
const Game = require('./model');

exports.getAll = async function (request, reply) {
    try {
        const { page } = request.query;
        const games = await Game.getAll(page);
        if (games.length < 1) {
            reply.send([]);
        }
        return reply.send(games);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
exports.getGameById = async function (request, reply) {
    try {
        const { gameId } = request.params;
        const game = await Game.getById(gameId);
        if (!game) {
            return reply.send({ message: 'No game' });
        }
        return reply.send(game);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.gameByImage = async function (request, reply) {
    try {
        const { gameImg } = request.body;

        const game = await Game.getByImg(gameImg);
        if (!game) {
            return reply.send({ message: 'No game' });
        }
        return reply.send(game);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.gameSearch = async function (request, reply) {
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

exports.addGame = async function (request, reply) {
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

exports.updateGame = async function (request, reply) {
    try {
        const { fields } = request.body;
        const { gameId } = request.params;
        const result = await Game.update(gameId, fields[0]);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.deleteGame = async function (request, reply) {
    try {
        const { gameId } = request.params;
        const result = await Game.delete(gameId);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
=======
const Game = require('./model');

exports.getAll = async function (request, reply) {
    try {
        const { page } = request.query;
        const games = await Game.getAll(page);
        if (games.length < 1) {
            reply.send([]);
        }
        return reply.send(games);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
exports.getGameById = async function (request, reply) {
    try {
        const { gameid } = request.params;
        const game = await Game.getById(gameid);
        if (!game) {
            return reply.send({ message: 'No game' });
        }
        return reply.send(game);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.gameSearch = async function (request, reply) {
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

exports.addGame = async function (request, reply) {
    const {
        steamprice,
        title,
        steamlink,
        imagelink,
        description,
    } = request.body;
    try {
        const result = await Game.add(
            steamprice,
            title,
            steamlink,
            imagelink,
            description,
        );
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.updateGame = async function (request, reply) {
    try {
        const { fields } = request.body;
        const { gameid } = request.params;
        const result = await Game.update(gameid, fields[0]);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.deleteGame = async function (request, reply) {
    try {
        const { gameid } = request.params;
        const result = await Game.delete(gameid);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
>>>>>>> 0c395a6d77a68d0974dc0db5500a0b9d8b9e112f
