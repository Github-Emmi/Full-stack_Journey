// models lives here

const mongoose = require('mongoose');

// create our book schema

const bookSchema = new mongoose.Schema({
    // our schema lives here:
    title: {
        type: String,
        required: [true, 'Author name is required'],
        maxlength: 100,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    genre: [{
        type: String,
        emun: ['Fiction', 'Sci-Fiction', 'Biography', 'History']
    }],
    isbn: {
        type: String,
        unique: true,
        match: [/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)/, 'Please enter a valid ISBN']
    },
    publishedYear: {
        type: String,
        min: 500,
        max: new Date().getFullYear()
    },

    availableCopies: {
        type: Number,
        min: 1
    },

    timestamps: true,

});

// create a logic

// check if book is available
bookSchema.methods.isAvailable = function(){
    return this.availableCopies > 0;
};

// find books by genre
bookSchema.statics.findByGernre = function(genre) {
    return this.find({
        genre: {$in: [genre]}
    });
};

// virtual property

bookSchema.virtual('age').get(
    function(){
        return new Date().getFullYear - this.publishedYear;
    }
);

const Book = mongoose.models('Book', bookSchema);
module.exports = Book;