const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "A thought entry is required",
            minlength: 1,
            maxlength: 280

        },

        createdAt: {
            type: Date,
            default: Date.now,
            // timestamps: true
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],
    },      
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },

    username: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        // Find getter method to format timestamp on query
    },
});

ThoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;