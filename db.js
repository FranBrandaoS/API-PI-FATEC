import { Sequelize } from "sequelize"

const db = new Sequelize(
    "database",
    "user",
    "passw",
    {
        dialect: "sqlite",
        storage: 'src/db.sqlite'
    }
)

export default db
