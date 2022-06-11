const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    userName: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    doc: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Doc"
    },
    text: String,
});

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;