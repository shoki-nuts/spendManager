import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const SpendForm = ({spendList}) => {

  const baseURL = 'http://localhost:3001/spends'

  const [spendDate, setSpendDate] = useState();
  const [spendItem, setSpendItem] = useState();
  const [spendAmount, setSpendAmount] = useState();

  const spendDateRef = useRef();
  const spendItemRef = useRef();
  const spendAmountRef = useRef();

  // 送信ボタンを押されたときの処理
  const handleSendForm = () =>{

    // inputの値を取得
    setSpendDate(spendDateRef.current.value);
    setSpendItem(spendItemRef.current.value);
    setSpendAmount(spendAmountRef.current.value);

    // 取得したデータをpost
    axios.post(baseURL,{
      date: spendDate,
      item: spendItem,
      amount: spendAmount
    }).then(res=>console.log(`body:`,res.data))
    .catch(err=>console.log('err:',err))

    // inputの値を初期化
    spendDateRef.current.value = null;
    spendItemRef.current.value = null;
    spendAmountRef.current.value = null;
  }

  return (
    <>
      <form method="post">
        <input type="date" ref={spendDateRef}/>
        <input type="text" ref={spendItemRef}/>
        <input type="text" ref={spendAmountRef}/>
        <input type="button" onClick={handleSendForm} value="追加" />
      </form>
      <ul>
        <li>{spendDate}</li>
        <li>{spendItem}</li>
        <li>{spendAmount}</li>
      </ul>
    </>
  )
}

export default SpendForm
