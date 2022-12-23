const express = require('express');
const router = express.Router();

const pool = require('../DB');

const app = express();

// Method GET spends data
app.get('/incomes', (req,res)=>{
    // spendTから全て取得
    pool.query('SELECT * FROM incomes', (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    })
})

// Method POST spends data
app.post('/spends', (req,res)=>{

    // parmeterからaxiosでpostしたname,amountを拾う
    const spendName = req.body.name;
    const spendAmount = req.body.amount;

    // nameの値がない、amountの値が数値以外の場合、POSTしない
    if (spendName.length!==0 && !isNaN(spendAmount)) {

        console.log(`name:${spendName}`,`amount:${spendAmount}`)
        pool.query('INSERT INTO spends(name, amount) VALUES ($1,$2)',[spendName, spendAmount])

    } else {
        console.log('データの値が無効です')
    }
})

 // Method DELETE spends data
app.delete('/income/:id', (req,res)=>{

    const id = req.params.id;
    // spendTからidが合致する行を取得
    pool.query('DELETE FROM incomes where income_id=$1',[id], (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    });
    
})



module.exports = router;

