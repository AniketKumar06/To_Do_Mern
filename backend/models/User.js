const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        default: null
    },
    avatar: {
        type: String
    },
    email: {
        type: String,
        unique: true

    },
    password: {
        type: String,
        require: true
    },
    //     token: {
    //         type: String
    //     }

}
);

module.exports = mongoose.model('User', userSchema);