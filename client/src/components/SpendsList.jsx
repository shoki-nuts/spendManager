import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import Spend from './Spend';
import SpendForm from './SpendForm';

const baseURL = 'http://localhost:3001/spends'

const SpendsList = () => {

  const [spends, setSpends] = useState([]);

  useEffect(()=>{
    axios.get(baseURL, {withCredentials: true})
    .then(res=>{
      setSpends(res.data);
      console.log(`GET status code:${res.status}`)
    }).catch(err=>{
        console.log(`Err: ${err}`);
    }) 
  },[]) 

  return (
    <>
      <SpendForm/>
      <div>
        {spends.map((n)=><Spend spend={n} key={n.id}/>)}
      </div>
    </>
  )
}

export default SpendsList