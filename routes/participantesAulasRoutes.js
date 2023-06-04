import express from 'express'
import participantesAulasController from '../controllers/participantesAulasController.js'

const participantesAulas_router = express.Router()

participantesAulas_router.get('/', participantesAulasController.getAllParticipantes)
participantesAulas_router.post('/', participantesAulasController.createParticipante)
participantesAulas_router.delete('/:id',participantesAulasController.deleteParticipante)
participantesAulas_router.put('/:id',participantesAulasController.updateParticipante)
participantesAulas_router.get('/:id',participantesAulasController.getParticipanteById)

export default participantesAulas_router