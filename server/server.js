const express = require('express');
const pool = require('./DB');
const cors = require('cors');

// ポート番号
const PORT = 3001;

const app = express();
// jsonを指定
app.use(express.json());
// クライアントの指定
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, 
    optionsSuccessStatus: 200
}));

// Method GET spends data
app.get('/spends', (req,res)=>{
    // spendTから全て取得
    pool.query('SELECT * FROM spend', (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    })
})

// Method GET spend data
app.get('/spend/:id', (req,res)=>{

    const id = req.params.id;

    // spendTからidが合致する行を取得
    pool.query('SELECT * FROM spend where id=$1',[id], (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    });
})

// Method POST spends data
app.post('/spends', (req,res)=>{

    // parmeterからaxiosでpostしたname,amountを拾う
    const spendName = req.body.name;
    const spendAmount = req.body.amount;

    // nameの値がない、amountの値が数値以外の場合、POSTしない
    if (spendName.length!==0 && !isNaN(spendAmount)) {

        console.log(`name:${spendName}`,`amount:${spendAmount}`)
        pool.query('INSERT INTO spend(name, amount) VALUES ($1,$2)',[spendName, spendAmount])

    } else {
        console.log('データの値が無効です')
    }
})

// Method DELETE spend data
app.delete('/spend/:id', (req,res)=>{

    const id = req.params.id;

    // spendTからidが合致する行を取得
    pool.query('DELETE FROM spend where id=$1',[id], (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    });
})

// server up
app.listen(PORT, console.log(`server liten on ${PORT}`));