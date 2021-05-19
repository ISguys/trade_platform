const schemes = {};
// get
schemes.getAll = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    orderId: { type: 'string' },
                    creatorId: { type: 'integer' },
                    orderDate: { type: ['string', null] },
                    gameId: { type: 'integer' },
                    steamBotLink: { type: 'string' },
                    buyerId: { type: ['integer', null] },
                    price: { type: 'number' },
                    createdAt: { type: 'string' },
                    status: { type: 'boolean' },
                },
            },
        },
    },
};
// get
schemes.getOfferById = {
    querystring: {
        type: 'object',
        required: ['orderId'],
        properties: {
            orderId: { type: 'string' },
        },
    },

    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    orderId: { type: 'string' },
                    creatorId: { type: 'integer' },
                    orderDate: { type: ['string', null] },
                    gameId: { type: 'integer' },
                    steamBotLink: { type: 'string' },
                    buyerId: { type: ['integer', null] },
                    price: { type: 'number' },
                    createdAt: { type: 'string' },
                    status: { type: 'boolean' },
                },
            },
        },
    },
};
// post
schemes.addOffer = {
    body: {
        type: 'object',
        required: ['creatorId', 'gameId', 'steamBotLink', 'price'],
        properties: {
            creatorId: { type: 'integer' },
            gameId: { type: 'integer' },
            steamBotLink: { type: 'string' },
            price: { type: 'number' },
        },
    },

    response: {
        200: {
            type: 'string',
        },
    },
};
//delete
schemes.deleteOffer = {
    response: {
        200: {
            type: 'string',
        },
    },
};

module.exports = schemes;
