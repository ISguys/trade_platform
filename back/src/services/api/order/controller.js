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
        const { sellerid, buyerid, offerid, type } = request.body;
        const result = await Order.add(sellerid, buyerid, offerid, type);
        if (Offer.getById(offerid)) Offer.close(offerid, buyerid);
        return reply.send(result);
    } catch (err) {
        fastify.log.error(err);
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
        fastify.log.error(err);
        throw new Error(`${err.message}\n${err.name}: \
        in line ${err.lineNumber}`);
    }
};
