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
      console.log(`get!!!!`,res.data)
      console.log(`GET status ${res.status}`)
    }).catch(err=>{
      console.log(`GetErr ${err}`);
    })
  },[]) 

  return (
    <>
      <SpendForm spendsList={spends}/>
      <div>
        {spends.map((n)=><Spend spend={n}/>)}
      </div>
    </>
  )
}

export default SpendsList