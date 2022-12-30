import React from 'react';
import axios from 'axios';

const Data = ({data}) => {

  // const baseURL = 'http://localhost:3001/spends/'

  // // データの削除
  // const handleDelete=()=>{

  //   axios.delete(baseURL+data.id)
  //   .then(()=>{console.log(`delete id:${data.id}`)})
  //   .catch(err=>console.log(err))
  // };
  
  return (
    <ul>
      <li>{data.date}</li>
      <li>{data.item}</li>
      <li>{data.amount}</li>
      {/* <button onClick={handleDelete}>削除</button> */}
    </ul>
  )
}

export default Data