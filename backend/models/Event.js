const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
    title: {
        type: String,
        trim: true.valueOf,
        required: [true, 'Please add some text']
    },
    description: {
        type: String,
        trim: true.valueOf,
        required: [true, 'Please add a description of the event']
    },
    photo: {
        type: String,
        required: [true, 'Please add a link of the photo']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}));

module.exports = Event;