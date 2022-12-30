import React from 'react';
import axios from 'axios';

const Income = ({income}) => {

  const baseURL = 'http://localhost:3001/income/'

  // データの削除
  const handleDeleteIncome=()=>{

    axios.delete(baseURL+income.incomes_id)
    .then(()=>{console.log(`delete id:${income.incomes_id}`)})
    .catch(err=>console.log(err))
  };
  
  return (
    <ul>
      <li>{income.date}</li>
      <li>{income.item}</li>
      <li>{income.amount}</li>
      <button onClick={handleDeleteIncome}>削除</button>
    </ul>
  )
}

export default Income