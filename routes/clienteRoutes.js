import express from 'express'
import clienteController from '../controllers/clienteController.js'

const cliente_router = express.Router()

cliente_router.get('/', clienteController.getAllCliente)
cliente_router.post('/', clienteController.createCliente)
cliente_router.delete('/id',clienteController.deleteCliente)
cliente_router.put('/id',clienteController.updateCliente)
cliente_router.get('/id',clienteController.getClienteById)
cliente_router.post('/login', clienteController.loginCliente)

export default cliente_router