const schemes = {};
// get
schemes.getAll = {
    querystring: {
        type: 'object',
        required: ['page'],
        properties: {
            page: { type: 'integer' },
        },
    },
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    gameId: { type: 'string' },
                    title: { type: 'string' },
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
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    gameId: { type: 'string' },
                    title: { type: 'string' },
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
            type: 'string',
        },
    },
};
// put
schemes.updateGame = {
    body: {
        type: 'object',
        required: ['fields'],
        properties: {
            fields: { type: 'array' },
        },
    },

    response: {
        200: {
            type: 'string',
        },
    },
};
//delete
schemes.deleteGame = {
    response: {
        200: {
            type: 'string',
        },
    },
};

module.exports = schemes;
