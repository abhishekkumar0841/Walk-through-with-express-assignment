const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'

const randomNumber = () =>{
    const randomNumber = Math.floor(Math.random() * 101)
    return randomNumber
}

app.get('/', (req, res)=>{
    res.json( {note: 'go to /random to get random number' })
})

app.get('/random', (req, res)=>{
    res.json({ Random: randomNumber()})
})

app.listen(port,()=>{
    console.log(`This app is running on ${host}:${port}`)
})

