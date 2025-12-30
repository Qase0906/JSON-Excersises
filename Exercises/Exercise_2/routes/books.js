import express from 'express'
import { createBook, getAllBooks, getBook, updateBook, deletBook } from "../controllers/books.js"
const router = express.Router()


router.post('/create', createBook)
router.get('/', getAllBooks)
router.get('/:id', getBook)
router.put('/:id', updateBook)
router.delete('/:id', deletBook)


export default router