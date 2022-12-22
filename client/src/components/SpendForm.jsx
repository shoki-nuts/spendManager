import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const SpendForm = () => {

  const baseURL = 'http://localhost:3001/spends'

  const [SpendName, setSpendName] = useState('');
  const [SpendAmount, setSpendAmount] = useState('');

  // inputに入力されたnameデータを取得
  const handleSpendNameChange = (e) =>{
    const SpendNameValue = e.target.value 
    setSpendName(SpendNameValue);
  }

  // inputに入力されたamountデータを取得
  const handleSpendAmountChange = (e) =>{
    const SpendAmountValue = e.target.value
    setSpendAmount(SpendAmountValue);
  }

  // 取得したデータをpost
  const handleSendForm = () =>{
    axios.post(baseURL,{
      name: SpendName,
      amount: SpendAmount
    }).then(res=>console.log(`body:`,res.data))
    .catch(err=>console.log('err:',err))
  }

  return (
    <>
      <form method="post">
          <input type="text" onChange={handleSpendNameChange}/>
          <input type="text" onChange={handleSpendAmountChange}/>
          <input type="button" onClick={handleSendForm} value="追加" />
      </form>
      <p>{SpendName}</p>
      <p>{SpendAmount}</p>
    </>
  )
}

export default SpendForm
