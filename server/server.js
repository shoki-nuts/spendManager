const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./DB');

const incomeRoutes = require('./routes/incomes');
const spendRoutes = require('./routes/spends');

// ポート番号
const PORT = 3001;
// jsonを指定
app.use(express.json());

app.use(incomeRoutes);
app.use(spendRoutes);

app.get('/spends', (req,res)=>{
  try {
      pool.query('SELECT * FROM spends', (err,result)=>{
          if (err) throw err;
          return res.status(200).json(result.rows);
      })
  } catch (err) {
          console.error(err)
  }
})


// 全ての通信を許可
app.use(cors({
  origin: 'http://localhost:3000', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))


app.use((req, res) => {
    res.status(404).send("<h1>ページが見つかりません</h1>");
  });
  

// server up
app.listen(PORT, console.log(`Server is running on PORT:${PORT}`));

