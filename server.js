import express from 'express'
import db from './db.js'
import funcionariosRoutes from './routes/funcionariosRoutes.js'
import clientesRoutes from './routes/clienteRoutes.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

db.sync(() => console.log('Banco de dados preparado'))
app.use('/funcionarios', funcionariosRoutes)
app.use('/clientes', clientesRoutes)
app.listen(port, () => console.log("Server rodando na porta "+port))