//example
exports.getAllSchema = {
    response: {
        200: {
            type: 'array',
        }
    }
};
//example
exports.getByIdSchema = {
    querystring: {
        name: { type: 'string' },
        excitement: { type: 'integer' }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                hello: { type: 'string' }
            }
        }
    }

};
//example
exports.getAccountSchema = {
    querystring: {
        name: { type: 'string' },
        excitement: { type: 'integer' }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                hello: { type: 'string' }
            }
        }
    }

};
//example
exports.createSchema = {
    querystring: {
        name: { type: 'string' },
        excitement: { type: 'integer' }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                hello: { type: 'string' }
            }
        }
    }

};
