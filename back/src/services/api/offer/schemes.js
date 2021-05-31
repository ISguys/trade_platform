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
                    creatorId: { type: 'string' },
                    gameId: { type: 'string' },
                    steamBotLink: { type: 'string' },
                    price: { type: 'number' },
                    createdAt: { type: 'object' },
                    status: { type: 'boolean' },
                    buyerId: { type: ['null', 'string'] },
                    orderDate: { type: ['null', 'string'] },
                },
            },
        },
    },
};
// get
schemes.getOfferById = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    orderId: { type: 'string' },
                    creatorId: { type: 'string' },
                    gameId: { type: 'string' },
                    steamBotLink: { type: 'string' },
                    price: { type: 'number' },
                    createdAt: { type: 'object' },
                    status: { type: 'boolean' },
                    buyerId: { type: ['null', 'string'] },
                    orderDate: { type: ['null', 'string'] },
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
            creatorId: { type: 'string' },
            gameId: { type: 'string' },
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
