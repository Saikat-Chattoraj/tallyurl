const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        unique: true,
        default:true,
        maxlength: [10, 'Add url less than 10 characters']
    },
    longUrl: {
        type: String,
        required: true,
        maxlength: [500, 'Add url less than 500 characters']
    },
		
})

module.exports = mongoose.models.Urls || mongoose.model('Urls', LinkSchema);