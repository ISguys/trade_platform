const schemes = {};
// get
schemes.getAll = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    sellerId: { type: 'integer' },
                    buyerId: { type: 'integer' },
                    orderId: { type: 'integer' },
                    date: { type: 'string' },
                    type: { type: 'string' },
                },
            },
        },
    },
};
// get
schemes.getOrderById = {
    querystring: {
        type: 'object',
        required: ['id'],
        properties: {
            id: { type: 'integer' },
        },
    },

    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    sellerId: { type: 'integer' },
                    buyerId: { type: 'integer' },
                    orderId: { type: 'integer' },
                    date: { type: 'string' },
                    type: { type: 'string' },
                },
            },
        },
    },
};
// post
schemes.addOrder = {
    body: {
        type: 'object',
        required: ['sellerId', 'buyerId', 'orderId', 'type'],
        properties: {
            sellerId: { type: 'integer' },
            buyerId: { type: 'integer' },
            orderId: { type: 'integer' },
            type: { type: 'string' },
        },
    },

    response: {
        200: {
            type: 'string',
        },
    },
};
//delete
schemes.deleteOrder = {
    body: {
        type: 'object',
        required: ['id'],
        properties: {
            id: { type: 'integer' },
        },
    },

    response: {
        200: {
            type: 'string',
        },
    },
};

module.exports = schemes;
