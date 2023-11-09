import express from 'express'
import authController from '../controllers/authController.js'

const auth_router = express.Router()

auth_router.post('/login', authController.Login)
auth_router.post('/refresh', authController.Refresh)
auth_router.post('/logout', authController.Logout)

export default auth_router