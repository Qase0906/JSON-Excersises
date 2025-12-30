

import mongoose from 'mongoose'


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedYear: Number,
    genr: String
})


const books = mongoose.model('BooksSchema', bookSchema)

export default books