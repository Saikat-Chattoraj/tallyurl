const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: [true, 'Add a shortUrl'],
        unique: true,
        maxlength: [10, 'Add url less than 10 characters']
    },
    longUrl: {
        type: String,
        required: true,
        maxlength: [500, 'Add url more than 500 characters']
    },
		userId: {
        type: String,
				default: 'guest',
		}
})

module.exports = mongoose.models.Urls || mongoose.model('Urls', LinkSchema);