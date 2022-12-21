import React from 'react'

const Spend = ({spend}) => {
  return (
    <ul>
      <li>{spend.name}</li>
      <li>{spend.amount}</li>
    </ul>
  )
}

export default Spend