import { Sequelize } from "sequelize"
import db from "../db.js"

const Aulas = db.define("aula",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeAula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    data: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    hora: {
        type: Sequelize.TIME,
        allowNull: false        
    },
    limiteAlunos: {
        type: Sequelize.INTEGER,
        allowNull: true       
    }
})

export default Aulas
