import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const IncomeForm = () => {

  const baseURL = 'http://localhost:3001/incomes'

  const [incomes, setIncomes] = useState({
    incomeDate: '',
    incomeItem: '',
    incomeAmount: null
  });

  const dateRef = useRef();
  const itemRef = useRef();
  const amountRef = useRef();

  // 取得したデータをpost
  const handleSendForm = () =>{

    const dateValue = dateRef.current.value
    const itemValue = itemRef.current.value
    const amountValue = amountRef.current.value

    axios.post(baseURL,
      {
        date:dateValue,
        item:itemValue,
        amount:amountValue
      })
    .then((res)=>console.log(`POST:`,res))
    .catch((err)=>console.log('err:',err))

    setIncomes({
      incomeDate:dateValue,
      incomeItem:itemValue,
      incomeAmount:amountValue
    });

    dateRef.current.value = ''
    itemRef.current.value = ''
    amountRef.current.value = null
  }

  return (
    <>
      <form method="post">
        <input type="date" ref={dateRef}/>
        <input type="text" ref={itemRef}/>
        <input type="text" ref={amountRef}/>
        <input type="button" onClick={handleSendForm} value="追加" />
      </form>
      <p>{incomes.incomeDate}</p>
      <p>{incomes.incomeItem}</p>
      <p>{incomes.incomeAmount}</p>
    </>
  )
}

export default IncomeForm
