const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UrlSchema = new Schema({
    originalUrl: {
        type: String, required: true
    },
    shortUrl: {
        type: String, required: true
    }
});

const Links = mongoose.model('Links', UrlSchema);
module.exports = Links;