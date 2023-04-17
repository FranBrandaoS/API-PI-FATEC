import Clientes from '../models/clienteModel.js'


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

export default {getAllCliente, createCliente, deleteCliente, updateCliente, getClienteById}