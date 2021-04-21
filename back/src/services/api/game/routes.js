const schemes = require('./schemes');
const { getAll, getGameById, addGame, deleteGame, updateGame } = require('./controller');

module.exports = function(fastify, opts, done) {
    // get all rows from table Game
    fastify.get('/game', /*{ schema: schemes.getAll },*/ getAll);

    // get game by id
    fastify.get(
        '/game/:gameId',
        { schema: schemes.getGameById },
        getGameById
    );
    // add new game
    fastify.post(
        '/game',
        {
            schema: schemes.addGame,
            preValidation: [fastify.tokenValidation],
        },
        addGame
    );
    // update game data
    fastify.put(
        '/game/:gameId',
        {
            schema: schemes.updateGame,
            preValidation: [fastify.tokenValidation],
        },
        updateGame
    );
    // delete game
    fastify.delete(
        '/game/:gameId',
        {
            schema: schemes.deleteGame,
            preValidation: [fastify.tokenValidation],
        },
        deleteGame
    );
    done();
};
