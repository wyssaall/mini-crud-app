import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    adulte: {
        type: Boolean
    }
});


const User = mongoose.model('User', usersSchema);
export default User;
