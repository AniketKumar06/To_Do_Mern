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

    try {
        // Verify content get from User

        // if (!(email && password && username)) {
        //     res.status(400).json({
        //         success: false,
        //         msg: "All fields are required"
        //     })
        // }

        // Check userExist or not
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
                        msg: "User Registered"
                    })
                }
            )
            // save user in database
            await user.save();

            // res.status(200).json({
            //     success: true,
            //     msg: "User Registered",
            //     userExist: user
            // });






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
    const email = req.body.email;
    const password = req.body.password;
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




        // create token 
        const payload = {
            user: {
                id: User._id
            }
        };

        jwt.sign(payload, process.env.jwtUserSecret,
            {
                expiresIn: "3h"
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    success: true,
                    msg: "Login successfully",
                    token: token,
                    user: user
                });
            });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: "server Error"
        })
        next();
    }
});

module.exports = router;