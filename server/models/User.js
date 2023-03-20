import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    role: {type: String, required: true},
    favourites: {type: Array}
});

const User = mongoose.model('User', userSchema);

export default User;



