import Clientes from "./clienteModel.js";
import Tokens from "./tokenModel.js";

Clientes.hasOne(Tokens, {foreignKey: 'userId'})
Tokens.belongsTo(Clientes, {foreignKey: 'userId'})


export { Tokens, Clientes }