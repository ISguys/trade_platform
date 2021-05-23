const fastify = require('fastify')({
    logger: true,
});

const fastifyPassport = require('fastify-passport');
const SteamStrategy = require('passport-steam').Strategy;
const fastifySecureSession = require('fastify-secure-session');
require('dotenv').config();

fastify.register(require('fastify-cors'));

//templates pligun
fastify.register(require('point-of-view'), {
    engine: {
        ejs: require('ejs'),
    },
    includeViewExtension: true,
    templates: './back/src/views',
});

//passport plugins
fastify.register(fastifySecureSession, { key: process.env.PASSPORT_SECRET });
fastify.register(fastifyPassport.initialize());
fastify.register(fastifyPassport.secureSession());

fastifyPassport.use(
    'steam',
    new SteamStrategy(
        {
            returnURL: `${process.env.BACK_URL}/auth/return`,
            realm: process.env.BACK_URL + '/',
            apiKey: process.env.STEAM_ACCESS,
        },
        (identifier, profile, done) => done(null, profile)
    )
);
// auth validation for routes
fastify.register(require('./services/api/auth/plugins/auth-plugin'));
// routes
fastify.register(require('./services/api/game/routes'));
fastify.register(require('./services/api/offer/routes'));
fastify.register(require('./services/api/user/user-routes'));
fastify.register(require('./services/api/auth/auth-routes'));

fastify.listen(process.env.PORT || 3001, '0.0.0.0', (err, address) => {
    if (err) {
        fastify.log.error(err);
        //process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});

exports.server = fastify;
