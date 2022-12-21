import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import Spend from './Spend';

const baseURL = 'http://localhost:3001/spends'

const SpendsList = () => {

  const [spends, setSpends] = useState([]);

  useEffect(()=>{
    axios.get(baseURL, {withCredentials: true})
    .then(res=>{
      setSpends(res.data);
      console.log(`GET status ${res.status}`)
    }).catch(err=>{
        console.log(`Err ${err}`);
    }) 
  },[]) 

  return (
    <div>
      {spends.map((i)=><Spend spend={i}/>)}
    </div>
  )
}

export default SpendsList