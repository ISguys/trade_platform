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
                    sellerid: { type: 'string' },
                    buyerid: { type: 'string' },
                    orderid: { type: 'string' },
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
                    sellerid: { type: 'string' },
                    buyerid: { type: 'string' },
                    orderid: { type: 'string' },
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
        required: ['sellerid', 'buyerid', 'orderid', 'type'],
        properties: {
            sellerid: { type: 'string' },
            buyerid: { type: 'string' },
            orderid: { type: 'string' },
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
