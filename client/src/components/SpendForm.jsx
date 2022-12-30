import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const SpendForm = () => {

  const baseURL = 'http://localhost:3001/spends'

  const [spends, setSpends] = useState({
    spendName: '',
    spendAmount: null
  });

  const NameRef = useRef();
  const AmountRef = useRef();

  // 取得したデータをpost
  const handleSendForm = () =>{
    const NameValue = NameRef.current.value
    const AmountValue = AmountRef.current.value

    axios.post(baseURL,
      {
        name:NameValue,
        amount:AmountValue
      })
    .then((res)=>console.log(`POST:`,res))
    .catch((err)=>console.log('err:',err))

    setSpends({
      spendName:NameValue,
      spendAmount:AmountValue
    });

    NameRef.current.value = ''
    AmountRef.current.value = ''
  }

  return (
    <>
      <form method="post">
          <input type="text" ref={NameRef}/>
          <input type="text" ref={AmountRef}/>
          <input type="button" onClick={handleSendForm} value="追加" />
      </form>
      <p>{spends.spendName}</p>
      <p>{spends.spendAmount}</p>
    </>
  )
}

export default SpendForm
