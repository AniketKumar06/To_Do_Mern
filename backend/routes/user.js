const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const e = require('express');
const bcryptjs = require('bcryptjs');
const user_jwt = require('../middleware/user_jwt')
const jwt = require('jsonwebtoken');


/**
 * For Registration Purpose 
 */

// get user idenity
router.get('/', user_jwt, async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({
            success: true,
            msg: "User Find Successfully",
            user: user
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            msg: "Server error"
        })
        next();
    }
})

/**
 * Authentication - Register User 
 */

router.post('/register', async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ error: "Please filled the field correctly" });
    }

    try {

        let userExists = await User.findOne({ email: email });

        if (userExists) {
            res.status(409).json({
                success: false,
                msg: "User Already Registered"
            });
        }
        //  If user not Eixst create new user
        else {
            let user = new User();
            user.username = username;
            user.email = email;

            //  Encrypting Password
            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(password, salt);

            let size = 200
            user.avatar = "https://gravatar.com/avatar/?s=" + size + '&d=retro';


            // create token 
            const payload = {
                user: {
                    id: user._id
                }
            };
            jwt.sign(payload, process.env.jwtUserSecret,
                {
                    expiresIn: "2h",
                },
                (err, token) => {
                    if (err) throw err;
                    user.token = token;
                    res.status(200).json({
                        success: true,
                        token: token,
                        msg: "Successfully User Registered",
                        user: user
                    })
                }
            )
            // save user in database
            await user.save();
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/** 
 * Login purpose
 * 
*/


router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            res.status(401).json({
                success: false,
                msg: "Please register first"
            });
        }

        const isMatchPass = await bcryptjs.compare(password, user.password);
        if (!isMatchPass) {
            return res.status(400).json({
                success: false,
                msg: "Please enter correct password"
            });
        }

// create tokenn
        const payload = {
            user: {
                id: user._id
            }
        };
        jwt.sign(payload, process.env.jwtUserSecret,
            {
                expiresIn: "2h",
            },
            (err, token) => {
                if (err) throw err;
                user.token = token;
                res.status(200).json({
                    success: true,
                    msg: "Login Successfully",
                    user: User,
                    token: token,
                })
            }
        );

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            msg: "Server Error",
        })
        next();
    }
});


module.exports = router;