const fastify = require('fastify');
const User = require('user-model');

exports.getAll = async (req, reply) => {
    try {
        const users = await User.getAll();
        if (!users) {
            return [];
        }
        return reply(users);
    } catch (err) {
        fastify.log.error(err);
        throw new Error('error');
    }
};

exports.getById = async (req, reply) => {
    const userId = req.params.userId;
    try {
        const user = await User.getById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return reply(user);
    } catch (err) {
        fastify.log.error(err);
        throw new Error('error');
    }
};
// will be changed
// eslint-disable-next-line no-unused-vars
exports.getAccount = async (req, reply) => {
    try {
        const users = await User.getAll();
        if (!users) {
            return [];
        }
        return users;
    } catch (err) {
        fastify.log.error(err);
        throw new Error('error');
    }
};
// should to be in auth
exports.create = async (req, reply) => {
    const {
        steamUsername, steamId, avatar
    } = req.body;
    try {
        const user = new User(steamUsername, steamId, avatar);
        await user.save();
        return reply('success');
    } catch (err) {
        fastify.log.error(err);
        throw new Error('error');
    }
};
