const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../user/user-model');

exports.login = async (req, reply) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            user = new User(
                req.user.displayName,
                req.user.id,
                req.user.photos[2].value
            );
            await user.save();
        }
        const token = jwt.sign({ id: user.id, username: user.steamUsername },
            process.env.SECRET, {
                expiresIn: '2h',
            });

        reply.view('success', {
            id: user.id,
            username: user.steamUsername,
            jwtToken: token,
            clientUrl: process.env.FRONT_URL
        });
    } catch (error) {
        throw new Error(error);
    }
};
