const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../user/user-model');

exports.login = async (req, reply) => {
    try {
        let user = await User.findById(req.user.id);
        if (user.length < 1) {
            user = new User(
                req.user.displayName,
                req.user.id,
                req.user.photos[2].value
            );
            await user.save();
        }
        console.log(user);
        user = user[0];
        const token = jwt.sign({ id: user.id, username: user.steamUsername },
            process.env.SECRET, {
                expiresIn: '12h',
            });

        return reply.view('success', {
            id: user.id,
            username: user.steam_name,
            jwtToken: token,
            clientUrl: process.env.FRONT_URL
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
