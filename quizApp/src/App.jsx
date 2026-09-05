import React from "react"
import './index.css'
import Timer from "./Components/Timer"
import Question from "./Components/Question"
import Result from "./Components/Result"
import { useState } from "react"


function App() {
  const [isOver, setIsOver] = useState(false)
  const [score, setScore] = useState(0)
  console.log(isOver);

  return (
    <div id="center">
      {
        isOver ? (
          <Result score={score} />
        ) : (
          <>
            <Timer setIsOver={setIsOver} />
            <Question setIsOver={setIsOver} setScore={setScore} />
          </>
        )
      }

    </div>
  )
}

export default App