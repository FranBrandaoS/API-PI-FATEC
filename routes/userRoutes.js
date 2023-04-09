import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.get('/', userController.getAllFuncionarios)
router.post('/', userController.createFuncionario)
router.delete('/:id',userController.deleteFuncionario)
router.put('/:id',userController.updateFuncionario)
router.get('/:id',userController.getFuncionarioById)

/*
router.get('/', userController.getAllCliente)
router.post('/', userController.createCliente)
router.delete('/:id',userController.deleteCliente)
router.put('/:id',userController.updateCliente)
router.get('/:id',userController.getClienteById)
*/

export default router