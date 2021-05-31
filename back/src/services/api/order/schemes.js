const schemes = {};
// get
schemes.getAll = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    sellerId: { type: 'string' },
                    buyerId: { type: 'string' },
                    orderId: { type: 'string' },
                    date: { type: 'string' },
                    type: { type: 'string' },
                },
            },
        },
    },
};
// get
schemes.getOrderById = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    sellerId: { type: 'string' },
                    buyerId: { type: 'string' },
                    orderId: { type: 'string' },
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
            sellerId: { type: 'string' },
            buyerId: { type: 'string' },
            orderId: { type: 'string' },
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
    response: {
        200: {
            type: 'string',
        },
    },
};

module.exports = schemes;
