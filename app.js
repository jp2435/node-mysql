const express = require('express')
const app = express()

const User = require('./models/User')
// const db = require('./models/db')


// Config JSON
app.use(express.json())

app.get('/', async(req,res)=>{
    res.send('Página principal')
})

app.post('/cadastrar', async(req,res) => {
    
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: 'Usuário criado com sucesso'
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: 'Erro a cadastrar usuário'
        })
    })

    res.send('Cadastrado')
})
app.listen(8080,()=>{
    console.log('Server running on port: 8080\nhttp://localhost:8080')
})