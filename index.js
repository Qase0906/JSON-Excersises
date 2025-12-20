const express = require("express");
const app = express();
require('dotenv').config();

const mongoose = require("mongoose")
const bookRoutes = require('./Exercises/Exercise_2/routes/books')

const PORT = 3000;

app.use(express.json());



// 👇 Your routes go here

// Exercise_2 Routes
app.use('/books', bookRoutes)



// get all books
app.get("/books", (req, res) => {
  res.json(books);
});

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Deep Work", author: "Cal Newport" },
];

// Get a single book
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found!");
  res.json(book);
});

// Add a new book
app.post("/books", (req, res) => {
  const bookId = books.length + 1;
  const newBook = {
    id: bookId,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book's Title
app.put("/books/:id", (req, res) => {
  const updateBook = books.find((b) => b.id == req.params.id);
  if (!updateBook) return res.status(404).send("Book not Updated!");
  updateBook.title = req.body.title;
  res.json(updateBook);
});

// Delete book
app.delete("/books/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);
  res.json(books);
});




// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("Connected Successfully ✔"))
  .catch(err => console.log("Connection Failed👎"))



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
