const { default: fastify } = require('fastify');
const Order = require('./model');
const Offer = require('../offer/model');
const User = require('../user/user-model');

exports.getAll = async function (request, reply) {
    try {
        const order = await Order.getAll();
        if (order.length < 1) {
            reply.send([]);
        }
        return reply.send(order);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.getOrderById = async function (request, reply) {
    try {
        const { id } = request.params;
        const order = await Order.getById(id);
        if (!order) {
            return reply.send({ message: 'No order' });
        }
        return reply.send(order);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.addOrder = async function (request, reply) {
    try {
        const { buyerid, orderid, type } = request.body;
        // get user's balance
        const user = await User.findById(buyerid);
        const balance = parseFloat(user[0]['balance']);
        // get offer info
        const offer = await Offer.getById(orderid);
        const price = parseFloat(offer[0]['price']);
        if (price < balance) {
            const sellerid = offer[0]['creatorid'];
            const game = offer[0]['gameid'];
            const result = await Order.add(sellerid, buyerid, orderid, type, balance - price, game);
            if (offer.length >= 1) await Offer.close(orderid, buyerid);
            return reply.send(result);
        } else {
            return reply.code(422).send('Not enough money on balance');
        }
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.deleteOrder = async function (request, reply) {
    try {
        const { id } = request.params;
        const result = await Order.delete(id);
        return reply.send(result);
    } catch (err) {
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
