import express from 'express'
import { register, signIn } from '../controllers/auth.js'
const router = express.Router()



router.post('/signup', register)
router.post('/signin', signIn)


export default router