const schemes = {};
// get
schemes.getAll = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    orderid: { type: 'string' },
                    creatorid: { type: 'string' },
                    gameid: { type: 'string' },
                    steambotlink: { type: 'string' },
                    price: { type: 'number' },
                    createdat: { type: 'object' },
                    status: { type: 'boolean' },
                    buyerid: { type: ['null', 'string'] },
                    orderdate: { type: ['null', 'string'] },
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
                    orderid: { type: 'string' },
                    creatorid: { type: 'string' },
                    gameid: { type: 'string' },
                    steambotlink: { type: 'string' },
                    price: { type: 'number' },
                    createdat: { type: 'object' },
                    status: { type: 'boolean' },
                    buyerid: { type: ['null', 'string'] },
                    orderdate: { type: ['null', 'string'] },
                },
            },
        },
    },
};
// post
schemes.addOffer = {
    body: {
        type: 'object',
        required: ['creatorid', 'gameid', 'steambotlink', 'price'],
        properties: {
            creatorid: { type: 'string' },
            gameid: { type: 'string' },
            steambotlink: { type: 'string' },
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
