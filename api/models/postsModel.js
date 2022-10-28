const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        title:{ type: String, required : true },
        description: { type: String },
    }, 
    { timestamp: true}
);

const User = mongoose.model('Post', PostSchema)
module.exports = User;