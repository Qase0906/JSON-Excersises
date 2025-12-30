import express from 'express'
import { protect } from '../middlewares/auth.js'
import { getUsers } from '../controllers/controllers.js'
const router = express.Router()


router.get('/', getUsers)


// Authenticated Route
router.get('/profile', protect, (req, res) => {
    res.json(req.user)
})


export default router