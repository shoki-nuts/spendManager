import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import Data from './Data';
import Form from './Form';

const baseURL = 'http://localhost:3001/incomes'

const IncomesList = () => {

  const [incomes, setIncomes] = useState([]);

  useEffect(()=>{
    axios.get(baseURL, {withCredentials: true})
    .then(res=>{
      setIncomes(res.data);
      console.log(`GET status code:${res.status}`)
    }).catch(err=>{
        console.log(`Err: ${err}`);
    }) 
  },[]) 

  return (
    <>
      <Form baseURL={baseURL}/>
      <div>
        {incomes.map((n)=><Data data={n} key={n.id}/>)}
      </div>
    </>
  )
}

export default IncomesList