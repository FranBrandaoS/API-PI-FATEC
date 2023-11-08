import {Clientes} from '../models/index.js'
import bcrypt from 'bcrypt'


async function getAllCliente(req,res){
    const cliente = await Clientes.findAll()
    res.json(cliente)
}

async function createCliente(req,res){
    const { cpf, nome, endereco, telefone, mensalidade, usuario, senha } = req.body

    const cli = new Clientes()
    cli.cpf = cpf
    cli.nome = nome
    cli.endereco = endereco
    cli.telefone = telefone
    cli.mensalidade = mensalidade
    cli.usuario = usuario
    cli.senha = bcrypt.hashSync(senha, 10)
    await cli.save()

    if(cli){
        res.json(cli)
    }
    else{
        res.status(500).json({ error: 'Erro desconhecido!'})
    }
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

async function loginCliente(req,res){
    const cliente = await Clientes.findOne(req.params.usuario)

    if(!cliente) return res.json({ error: 'Usuário não encontrado!'})

    const passwordCheck = bcrypt.compareSync(req.params.senha, cliente.senha)
    if(!passwordCheck) return res.json({ error: 'Senha inválida!'})

    res.json(cliente)
}

export default {getAllCliente, createCliente, deleteCliente, updateCliente, getClienteById, loginCliente}
