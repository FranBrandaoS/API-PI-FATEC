import { Sequelize } from "sequelize"
import db from "../db.js"

const Funcionario = db.define("funcionario",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    senha: {
        type: Sequelize.BLOB,
        allowNull: true
    }
})

export default Funcionario