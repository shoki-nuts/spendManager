const express = require('express');
const cors = require('cors');
const spendsRouter = require('./Routes/spends')
const incomesRouter = require('./Routes/incomes')

// ポート番号指定
const PORT = 3001;

const app = express();

// jsonを指定
app.use(express.json())

// クライアントの指定
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, 
    optionsSuccessStatus: 200
}));

// ルーティングを取得
app.use(spendsRouter);
app.use(incomesRouter);


// サーバー接続
app.listen(PORT, console.log(`server liten on ${PORT}`));