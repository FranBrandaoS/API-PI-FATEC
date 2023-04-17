import Funcionario from '../models/funcionariosModel.js'

async function getAllFuncionarios(req,res){
    const funcionario = await Funcionario.findAll()
    res.json(funcionario)
}

async function createFuncionario(req,res){
    const funcionario = await Funcionario.create(req.body)
    res.json(funcionario)
}

async function deleteFuncionario(req,res){
    const funcionario = await Funcionario.destroy({where: {id: req.params.id}})
    res.json(funcionario)
}

async function updateFuncionario(req,res){
    const funcionario = await Funcionario.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }
    )
    res.json(funcionario)
}

async function getFuncionarioById(req,res){
    const funcionario = await Funcionario.findByPk(req.params.id)
    res.json(funcionario)
}

export default {getAllFuncionarios, createFuncionario, deleteFuncionario, updateFuncionario, getFuncionarioById}