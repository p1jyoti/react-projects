import React from 'react'
import A from './Components/A'
import B from './Components/B'
import './App.css'
import { useMyContext } from './MyContext'

const App = () => {
  // using the myContext [3]

  // const data = useContext(myContext)
  // console.log(data);



  return (
    <div id='center'>
      <div className='bg-red-800 w-fit text-black p-10'>
        {/* {data} */}
        <p>App</p>
        <A />
        <B />
      </div>
    </div>
  )
}

export default App