const express = require("express")
const { createBook, getAllBooks, getBook, updateBook, deletBook } = require("../controllers/books")
const router = express.Router()


router.post('/create', createBook)
router.get('/', getAllBooks)
router.get('/:id', getBook)
router.put('/:id', updateBook)
router.delete('/:id', deletBook)


module.exports = router