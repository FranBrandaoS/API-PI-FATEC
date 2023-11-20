import Clientes from "./clienteModel.js";
import Tokens from "./tokenModel.js";
import db from "../db.js";

Clientes.hasOne(Tokens, {foreignKey: 'userId'})
Tokens.belongsTo(Clientes, {foreignKey: 'userId'})


export { Tokens, Clientes }