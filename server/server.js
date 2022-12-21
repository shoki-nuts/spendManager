const express = require('express');
const pool = require('./DB');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/spends', (req,res)=>{
    pool.query('SELECT * FROM spend', (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    })
})

app.listen(PORT, console.log(`server liten on ${PORT}`));