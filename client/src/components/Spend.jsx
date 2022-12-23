import React from 'react';
import axios from 'axios';

const Spend = ({spend}) => {

  const baseURL = 'http://localhost:3001/spend/'

  // データの削除
  const handleDeleteSpend= async()=>{

    await axios.delete(baseURL+spend.id)
    .try(()=>{console.log(`delete id:${spend.id}`)})
    .catch(err=>console.log(err))
  };
  
  
  return (
    <ul>
      <li>{spend.name}</li>
      <li>{spend.amount}</li>
      <button onClick={handleDeleteSpend}>削除</button>
    </ul>
  )
}

export default Spend