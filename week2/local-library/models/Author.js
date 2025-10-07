const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
    },

    dateOfBirth: {
        year: Date,
        place: String,
        hopistal: String,
    },

    dateOfDeath: {
        year: Date,
        place: String,
        hopistal: String,
    },

    nationality: {
    type: String,
    default: 'Unknown'
    },

    timestamps: true

});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;