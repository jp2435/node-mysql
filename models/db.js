const Sequelize = require('sequelize')

const db = new Sequelize('database','user', 'password', {
    host: 'host',
    dialect: 'mysql'
})

db.authenticate()
.then(()=>{
    console.log('Conexão com o banco de dados criada com sucesso')
})
.catch(()=>{
    console.log('Error na conexão com o banco de dados')
})

module.exports = db