const { Schema, model } = require('mongoose');
const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: "User name is required",
        trim: true,
    },

    email: {
        type: String,
        required: "Email is required",
        unique: true,
        validate: [validateEmail, "Please enter a valid email address"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"],

    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    toJSON: {
        virtuals: true,
        },
        id: false,   
});

UserSchema.virtual("friendCount").get(function() {
    return this.friend.length;
});

const User = model("User", UserSchema);

module.exports = User;