
import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const PORT = 3000;


import mongoose from 'mongoose';
import bookRoutes from './Exercises/Exercise_2/routes/books.js'



app.use(express.json());



// 👇 Your routes go here

// Exercise_2 Routes
app.use('/books', bookRoutes)





// Exercise_3 
// Challenge: Build a Complete JWT-Based Auth System with Role-Based Access

import userRoute from './Exercises/Exercise_3/routes/user.js'
import authRoute from './Exercises/Exercise_3/routes/auth.js'
import adminRoute from './Exercises/Exercise_3/routes/admin.js'


import { logger } from './Exercises/Exercise_3/middlewares/loggers.js';
import { notFound } from './Exercises/Exercise_3/middlewares/notFound.js';
import { handleError } from './Exercises/Exercise_3/middlewares/handleErrors.js';

// LOGGER
app.use(logger)


app.use('/users', userRoute)
app.use('/auth', authRoute)

// protected routes
app.use('/admin', adminRoute)



// not found route middleware
app.use(notFound)




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



// LAST ROUTE MIDDLEWARE
app.use(handleError)


// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("Connected Successfully ✔"))
  .catch(err => console.log("Connection Failed👎"))



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
