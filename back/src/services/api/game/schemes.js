const schemes = {};
// get
schemes.getAll = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    gameId: { type: 'integer' },
                    streamPrice: { type: 'number' },
                    steamLink: { type: 'string' },
                    imageLink: { type: 'string' },
                    description: { type: 'string' },
                },
            },
        },
    },
};
// get
schemes.getGameById = {
    querystring: {
        type: 'object',
        required: ['gameId'],
        properties: {
            gameId: { type: 'integer' },
        },
    },

    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    gameId: { type: 'integer' },
                    streamPrice: { type: 'number' },
                    steamLink: { type: 'string' },
                    imageLink: { type: 'string' },
                    description: { type: 'string' },
                },
            },
        },
    },
};
// post
schemes.addGame = {
    body: {
        type: 'object',
        required: [
            'steamPrice',
            'title',
            'steamLink',
            'imageLink',
            'description',
        ],
        properties: {
            steamPrice: { type: 'number' },
            title: { type: 'string' },
            steamLink: { type: 'string' },
            imageLink: { type: 'string' },
            description: { type: 'string' },
        },
    },

    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'string' },
            },
        },
    },
};
// put
schemes.updateGame = {
    body: {
        type: 'object',
        required: ['gameId', 'fields'],
        properties: {
            gameId: { type: 'integer' },
            fields: { type: 'array' },
        },
    },

    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'string' },
            },
        },
    },
};
//delete
schemes.deleteGame = {
    body: {
        type: 'object',
        required: ['gameId'],
        properties: {
            gameId: { type: 'integer' },
        },
    },

    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'string' },
            },
        },
    },
};

module.exports = schemes;
