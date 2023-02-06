const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("thoughts", "root", "", {
    host: "localhost",
    dialect: "mysql",
})

try {
    sequelize.authenticate()
    console.log("Connected successfully")
} catch(err) {
    console.error(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize