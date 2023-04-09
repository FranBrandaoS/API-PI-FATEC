import Funcionario from '../models/userModel.js'
//import Clientes from '../models/userModel.js'

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

/*
async function getAllCliente(req,res){
    const cliente = await Clientes.findAll()
    res.json(cliente)
}

async function createCliente(req,res){
    const cliente = await Clientes.create(req.body)
    res.json(cliente)
}

async function deleteCliente(req,res){
    const cliente = await Clientes.destroy({where: {id: req.params.id}})
    res.json(cliente)
}

async function updateCliente(req,res){
    const cliente = await Clientes.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }
    )
    res.json(cliente)
}

async function getClienteById(req,res){
    const cliente = await Clientes.findByPk(req.params.id)
    res.json(cliente)
}
*/

export default {getAllFuncionarios, createFuncionario, deleteFuncionario, updateFuncionario, getFuncionarioById}