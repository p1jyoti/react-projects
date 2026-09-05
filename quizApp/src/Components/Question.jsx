import React from 'react'
import question from './question.json'
import { useState } from 'react'

const Question = ({setIsOver , setScore}) => {
  // console.log(question);


  const [currentIndex, setCurrentIndex] = useState(2)

  const handleOptionClick =(selectedOption) => {
    console.log(selectedOption);
    if (selectedOption === question[currentIndex].answer) {
      setScore(prev => prev + 1)
      
      // either mathch position or length
      // if(current Index + 1 < question.length ){

      if(currentIndex < question.length -1){
        setCurrentIndex(prev => prev + 1)
      }
      else{
        setIsOver(true)
      }
    }
  }
  
  // console.log(score);
  // console.log(question[currentIndex]);

  return (
    <div>
      <h2 className='mb-6'>{question[currentIndex].question}</h2>

      <div className='mt-6 flex flex-col justify-center '>
        {
          question[currentIndex].options.map((option) => {
            // console.log(option);
            return <button onClick={()=>handleOptionClick(option)} className='counter' key={option}>{option}</button>
          })
        }
      </div>
    </div>
  )
}

export default Question