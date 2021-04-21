const { default: fastify } = require('fastify');
const Order = require('./model');
const Offer = require('../offer/model');

exports.getAll = async function (request, reply) {
    try {
        const order = await Order.getAll();
        if (order.length < 1) {
            reply.send([]);
        }
        return reply.send(order);
    } catch (err) {
        fastify.log.error(err);
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
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.addOrder = async function (request, reply) {
    try {
        const { sellerId, buyerId, offerId, type } = request.body;
        const result = await Order.add(sellerId, buyerId, offerId, type);
        Offer.close(offerId, buyerId);
        return reply.send(result);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};

exports.deleteOrder = async function (request, reply) {
    try {
        const { Id } = request.body;
        const result = await Order.delete(Id);
        return reply.send(result);
    } catch (err) {
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
