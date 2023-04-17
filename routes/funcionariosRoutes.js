import express from 'express'
import funcionariosController from '../controllers/funcionariosController'

const funcionarios_router = express.Router()

funcionarios_router.get('/', funcionariosController.getAllFuncionarios)
funcionarios_router.post('/', funcionariosController.createFuncionario)
funcionarios_router.delete('/:id',funcionariosController.deleteFuncionario)
funcionarios_router.put('/:id',funcionariosController.updateFuncionario)
funcionarios_router.get('/:id',funcionariosController.getFuncionarioById)

export default funcionarios_router