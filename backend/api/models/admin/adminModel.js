import {Schema , model} from 'mongoose';
const adminMondelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, role: {
        type: Number,
        default: 1
    }
});

export default model("admin",adminMondelSchema);

