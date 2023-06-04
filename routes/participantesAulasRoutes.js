import express from 'express'
import participantesController from '../controllers/participantesAulasController'

const participantesAulas_router = express.Router()

participantesAulas_router.get('/', participantesController.getAllParticipantes)
participantesAulas_router.post('/', participantesController.createParticipante)
participantesAulas_router.delete('/:id',participantesController.deleteParticipante)
participantesAulas_router.put('/:id',participantesController.updateParticipante)
participantesAulas_router.get('/:id',participantesController.getParticipanteById)

export default participantesAulas_router