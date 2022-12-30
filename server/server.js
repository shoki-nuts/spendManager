const express = require('express');
const cors = require('cors');
const spendsRouter = require('./Routes/spends')

// ポート番号
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

app.use(spendsRouter);


// server up
app.listen(PORT, console.log(`server liten on ${PORT}`));