const express = require('express')
const port = 3000;
const host = 'localhost'

const app = express();

app.get('/', (req, res)=>{
    res.json({ msg: "I am a home page "})
})

app.get('/about', (req, res)=>{
    res.json({ msg: "I am a about page "})
})

app.get('/contact', (req, res)=>{
    res.json({ msg: "support@pwskills.com"})
})

app.listen(port, ()=>{
    console.log(`This page is running on ${host}:${port}`)
})