
import Books from "../models/BooksSchema.js"

// Get books from MongoDB
export const getAllBooks = async (req, res) => {
  const books = await Books.find();
  res.json(books);
};

// Get a Single book from MongoDB
export const getBook = async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id);
  res.json(book);
};

// Create
export const createBook = async (req, res) => {
  const book = new Books(req.body);
  const save = await book.save();

  res.status(201).json(save);
};

// Update
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const updatedBook = await Books.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  try {
    if (!updatedBook) {
      return res.status(400).json(`A book has this id (${id}) doesn't exist`);
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json("Server Error occured: ", err);
  }
};



// Update
export const deletBook = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Books.findByIdAndDelete(id);

  try {
    if (!deletedBook) {
      return res.status(400).json(`A book has this id (${id}) doesn't exist`);
    }

    res.json(deletedBook);
  } catch (err) {
    res.status(500).json("Server Error occured: ", err);
  }
};
