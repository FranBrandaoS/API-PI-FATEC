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
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereço: {
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
    }
})

/*
const Clientes = db.define("cliente",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereço: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    mensalidade: {
        type: Sequelize.FLOAT,
        allowNull: false
    }

})
*/

export default {Funcionario,Clientes}