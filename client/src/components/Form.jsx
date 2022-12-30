import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const Form = ({baseURL}) => {

  const [date, setData] = useState({
    date: '',
    item: '',
    amount: null
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

    setData({
      date:dateValue,
      item:itemValue,
      amount:amountValue
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
      <p>{date.date}</p>
      <p>{date.item}</p>
      <p>{date.amount}</p>
    </>
  )
}

export default Form
