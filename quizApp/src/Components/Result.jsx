import React from 'react'
import Question from './Question'

const Result = ({ score }) => {
  return (
    <div>
      <button className='counter'>
        <p>Your Score is: {score}</p>
      </button>

    </div>
  )
}

export default Result