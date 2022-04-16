import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {type: String, require: true, max: 100},
    lastName: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    user: {type: String, require: true, max: 100},
    pwd: {type: Number, require: true}
});

export const usuarios = mongoose.model('users', usersSchema);