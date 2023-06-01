import { Sequelize } from "sequelize"
import db from "../db.js"

const Aulas = db.define("aula",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    limiteAlunos: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
  
})

export default Aulas
