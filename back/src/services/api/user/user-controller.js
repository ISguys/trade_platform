const User = require('./user-model');

exports.getAll = async (req, reply) => {
    try {
        const users = await User.getAll();
        if (!users) {
            reply.send([]);
        }
        return reply.send(users);
    } catch (err) {
        throw new Error('error');
    }
};

exports.getById = async (req, reply) => {
    const userId = req.params.userId;
    try {
        const user = await User.getById(userId);
        if (!user) {
            return reply.send({ message: 'no user has been found' });
        }
        return reply.send(user);
    } catch (err) {
        throw new Error('error');
    }
};
// will be changed
// eslint-disable-next-line no-unused-vars
exports.getAccount = async (req, reply) => {
    try {
        const user = await User.getAll();
        if (!user) {
            return [];
        }
        return reply.send(user);
    } catch (err) {
        throw new Error('error');
    }
};

