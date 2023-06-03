import Aulas from '../models/aulasModel.js'


async function getAllAulas(req,res){
    const aula = await Aulas.findAll()
    res.json(aula)
}

async function createAula(req,res){
    const aula = await Aulas.create(req.body)
    res.json(aula)
}

async function deleteAula(req,res){
    const aula = await Aulas.destroy({where: {id: req.params.id}})
    res.json(aula)
}

async function updateAula(req,res){
    const aula = await Aulas.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }
    )
    res.json(aula)
}

async function getAulaById(req,res){
    const aula = await Aulas.findByPk(req.params.id)
    res.json(aula)
}

export default {getAllAulas, createAula, deleteAula, updateAula, getAulaById}