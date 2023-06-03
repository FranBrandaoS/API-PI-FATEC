import express from 'express'
import aulasController from '../controllers/aulasController.js'

const aulas_router = express.Router()

aulas_router.get('/', aulasController.getAllAulas)
aulas_router.post('/', aulasController.createAula)
aulas_router.delete('/:id',aulasController.deleteAula)
aulas_router.put('/:id',aulasController.updateAula)
aulas_router.get('/:id',aulasController.getAulaById)

export default aulas_router