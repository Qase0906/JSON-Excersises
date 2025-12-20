
const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title: {type: String, require},
    author: {type: String, require},
    publishedYear: Number,
    genr: String
})


module.exports = mongoose.model('BooksSchema', bookSchema)