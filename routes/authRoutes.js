import express from 'express'
import authController from '../controllers/authController.js'
import cliente_router from './clienteRoutes.js'

const auth_router = express.Router()

cliente_router.post('/login', authController.Login)
cliente_router.post('refresh', authController.Refresh)
cliente_router.post('logout', authController.Logout)

export default auth_router