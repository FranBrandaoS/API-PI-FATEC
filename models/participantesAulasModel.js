import { Sequelize } from "sequelize"
import db from "../db.js"
import A from "./aulasModel.js"
import C from "./clienteModel.js"

const Participantes = db.define("participante",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeAula_Participantes: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    IdAula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    IdCliente: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Participantes.belongsTo(A, {foreignKey: 'IdAula', allowNull: false})
Participantes.belongsTo(C, {foreignKey: 'IdCliente', allowNull: false})

export default Participantes
