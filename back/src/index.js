const fastify = require('fastify')({
    logger: true
});

fastify.register([
    require('./api/user/user-routes'),
// other routes
]);

fastify.listen(3000, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});
