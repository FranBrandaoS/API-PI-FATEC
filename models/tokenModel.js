import { Sequelize } from "sequelize";
import db from "../db.js";
import Clientes from "./clienteModel.js";

const Tokens = db.define("token", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expiresAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    refreshToken: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})



export default Tokens