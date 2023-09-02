import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
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
        default: 0
    }
});

export default mongoose.model("user", userModelSchema);