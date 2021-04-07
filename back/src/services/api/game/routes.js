const schemes = require('./schemes');
const controllers = require('./controllers');

module.exports = function (fastify, done) {
    // get all rows from table Game
    fastify.get('/game', { schema: schemes.getAll }, controllers.getAll);

    // get game by id
    fastify.get(
        '/game/:gameId',
        { schema: schemes.getGameById },
        controllers.getGameById
    );
    // add new game
    fastify.post('/game', { schema: schemes.addGame }, controllers.addGame);
    // update game data
    fastify.put(
        '/game/:gameId',
        { schema: schemes.updateGame },
        controllers.updateGame
    );
    // delete game
    fastify.delete(
        '/game/:gameId',
        { schema: schemes.deleteGame },
        controllers.deleteGame
    );
    done();
};
