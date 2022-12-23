const express = require('express');
const pool = require('./DB');
const app = express();
const cors = require('cors');

const incomeRoutes = require('./routes/incomes');
const spendRoutes = require('./routes/spends');

// ポート番号
const PORT = 3001;
// jsonを指定
app.use(express.json());

app.use(incomeRoutes);
app.use(spendRoutes);


// クライアントの指定
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, 
    optionsSuccessStatus: 200
}));


app.use((req, res) => {
    res.status(404).send("<h1>ページが見つかりません</h1>");
  });
  

// server up
app.listen(PORT, console.log(`Server is running on PORT:${PORT}`));

