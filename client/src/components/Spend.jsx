import React from 'react';
import axios from 'axios';

const Spend = ({spend}) => {

  const baseURL = 'http://localhost:3001/spend/'

  // データの削除
  const handleDeleteSpend=()=>{

    axios.delete(baseURL+spend.spends_id)
    .then(()=>{console.log(`delete id:${spend.spends_id}`)})
    .catch(err=>console.log(err))
  };
  
  const day = new Date();
  console.log(day)
  
  return (
    <ul>
      <li>{spend.date}</li>
      <li>{spend.item}</li>
      <li>{spend.amount}</li>
      <button onClick={handleDeleteSpend}>削除</button>
    </ul>
  )
}

export default Spend