const express = require('express');
const cors = require('cors')
const router = express.Router();
const pool = require('../DB');
const app = express();

// クライアントの指定
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true, 
//     optionsSuccessStatus: 200
// }));

// Method GET spends data
// router.get('/spends', (req,res)=>{
//     try {
//         pool.query('SELECT * FROM spends', (err,result)=>{
//             if (err) throw err;
//             return res.status(200).json(result.rows);
//         })
//     } catch (err) {
//             console.error(err)
//     }
// })

 // Method POST spends data
 router.post('/spends', (req,res)=>{

    // parmeterからaxiosでpostしたdate,name,amountを拾う
    const spendDate = req.body.date;
    const spendItem = req.body.item;
    const spendAmount = req.body.amount;

    // nameの値がない、amountの値が数値以外の場合、POSTしない
    if (spendDate.length!==0 && spendItem.length!==0 && !isNaN(spendAmount)) {

      pool.query('INSERT INTO spends(date,item,amount) VALUES ($1,$2,$3)',[spendDate, spendItem, spendAmount])

    }else {
       console.log('データの値が無効です')
    }
})

// Method DELETE spends data
router.delete('/spend/:id', (req,res)=>{

    const id = req.params.id;

    // spendTからidが合致する行を取得
    pool.query('DELETE FROM spends where spend_id=$1',[id], (err,result)=>{
        if (err) throw err;
        return res.status(200).json(result.rows);
    });
})

module.exports = router;