import Participantes from '../models/participantesAulasModel'


async function getAllParticipantes(req,res){
    const participante = await Participantes.findAll()
    res.json(participante)
}

async function createParticipante(req,res){
    const participante = await Participantes.create(req.body)
    res.json(participante)
}

async function deleteParticipante(req,res){
    const participante = await Participantes.destroy({where: {id: req.params.id}})
    res.json(participante)
}

async function updateParticipante(req,res){
    const participante = await Participantes.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }
    )
    res.json(participante)
}

async function getParticipanteById(req,res){
    const participante = await Participantes.findByPk(req.params.id)
    res.json(participante)
}

export default {getAllParticipantes, createParticipante, deleteParticipante, updateParticipante, getParticipanteById}