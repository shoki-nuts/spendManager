const pool = require('../DB');
const express = require('express')
const router = express.Router();

// Method GET spends data
router.get('/spends', (req,res)=>{
    // spendTから全て取得
    pool.query('SELECT * FROM spends', (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    });
})

// Method POST spends data
router.post('/spends', (req,res)=>{

    // parmeterからaxiosでpostしたname,amountを拾う
    const spendDate = req.body.date
    const spendItem = req.body.item
    const spendAmount = req.body.amount;

    

    // nameの値がない、amountの値が数値以外の場合、POSTしない
    if (spendDate.length!==0 && spendItem.length!==0 && !isNaN(spendAmount)) {
        pool.query('INSERT INTO spends(name, amount) VALUES ($1,$2)',[spendName, spendAmount])
    
    } else {
        console.log('データの値が無効です');
    }
});

// Method DELETE spend data
router.delete('/spend/:id', (req,res)=>{

    const id = req.params.id;

    // spendTからidが合致する行を取得
    pool.query('DELETE FROM spends where id=$1',[id], (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    })
});

module.exports = router;