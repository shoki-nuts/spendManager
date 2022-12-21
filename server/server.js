const express = require('express');
const pool = require('./DB');
const app = express();
const PORT = 3001;

app.get('/', (req,res)=>{
    res.send('hello')
})

app.listen(PORT, console.log(`server liten on ${PORT}`));