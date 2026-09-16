import React, { useContext } from 'react'
import { myContext, useMyContext } from '../MyContext'

const C = () => {

  const { count } = useMyContext()

  return (
    <div className='bg-yellow-400 p-5 '>C
      <p>{count}</p>
    </div>
  )
}

export default C