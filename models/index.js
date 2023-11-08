import Clientes from "./clienteModel.js";
import Tokens from "./tokenModel.js";

Tokens.belongsTo(Clientes, { foreignKey: 'userId' })
Clientes.hasMany(Tokens)

export { Tokens, Clientes }