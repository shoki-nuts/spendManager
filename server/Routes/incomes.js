const pool = require('../DB');
const express = require('express')
const router = express.Router();

// Method GET spends data
router.get('/incomes', (req,res)=>{
    // spendTから全て取得
    pool.query('SELECT * FROM incomes', (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    });
})

// Method POST spends data
router.post('/incomes', (req,res)=>{

    // parmeterからaxiosでpostしたname,amountを拾う
    const incomeDate = req.body.date;
    const incomeItem = req.body.item;
    const incomeAmount = req.body.amount;

    // nameの値がない、amountの値が数値以外の場合、POSTしない
    if (incomeDate.length!==0 && incomeItem.length!==0 && !isNaN(incomeAmount)) {
        pool.query('INSERT INTO incomes(date, item, amount) VALUES ($1,$2,$3)',[incomeDate, incomeItem, incomeAmount])
    
    } else {
        console.log('データの値が無効です');
    }
});

// Method DELETE spend data
router.delete('/income/:id', (req,res)=>{

    const id = req.params.id;

    // spendTからidが合致する行を取得
    pool.query('DELETE FROM incomes where id=$1',[id], (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    })
});

module.exports = router;