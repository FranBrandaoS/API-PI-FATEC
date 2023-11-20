import {Clientes, Tokens} from "../models/index.js";
import bcrypt from 'bcrypt'

async function Login(req, res){
    const { usuario, senha } = req.body

    const user = await Clientes.findOne({where: { usuario }})
    if (user === null) return res.json({error: 'Usuário não encontrado!'})

    const senhaMatch = bcrypt.compareSync(senha, user.senha)
    if (!senhaMatch) return res.json({ error: 'Senha não confere!'})

    await Tokens.destroy(
        {where: {userId: user.id}}
    )

    const token = new Tokens()
    token.token = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20)
    token.expiresAt = new Date(Date.now() + 120 * 60 * 1000)
    token.refreshToken = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20)
    token.userId = user.id
    token.save()
    //const tokenFinal = await Tokens.create(token)

    res.json(token)
}

async function Refresh(req, res){
    const { authorization } = req.body

    if (!authorization) return res.json({ erro: 'O refresh token é obrigatório'})

    const token = await Tokens.findOne({where: {authorization}})
    if (!token) return res.json({ error: 'Refresh token inválido!'})

    if (token.expiresAt < new Date()){
        await token.destroy()
        return res.json({ error: 'Refresh token expirado!'})
    }

    token.token = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20)
    token.expiresAt = new Date(Date.now() + 120 * 60 * 1000)
    token.refreshToken = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20)

    const tokenRefreshed = await Tokens.create(token)

    return res.json(tokenRefreshed)
}

async function Logout(req, res){
    const { authorization } = req.headers

    if (!authorization) return res.json({ error: 'O token  é obrigatório!'})

    const userToken = await Tokens.findOne({ token: authorization})
    if(!userToken) return res.json({ error: 'Token inválido!'})

    await userToken.destroy()

    return res.json()
}

export default { Login, Logout, Refresh}