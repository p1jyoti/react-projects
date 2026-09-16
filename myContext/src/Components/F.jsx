import React from 'react'
import { useMyContext } from '../MyContext'


const F = () => {

    const { setCount } = useMyContext()
    // console.log(data);

    return (
        <div className='bg-pink-500 p-5'>
            <p>F</p>
            <button className='counter' onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}

export default F