import { Sequelize } from "sequelize"
import db from "../db.js"
//import A from "./aulasModel.js"
//import C from "./clienteModel.js"

const Participantes = db.define("participante",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    IdAula: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    IdCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

//Participantes.belongsTo(A, {foreignKey: 'IdAula', allowNull: false})
//Participantes.belongsTo(C, {foreignKey: 'IdCliente', allowNull: false})

export default Participantes
