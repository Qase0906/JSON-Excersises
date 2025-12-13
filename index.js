const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Deep Work", author: "Cal Newport" },
];

// 👇 Your routes go here

// get all books
app.get("/books", (req, res) => {
  res.json(books);
});

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

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
