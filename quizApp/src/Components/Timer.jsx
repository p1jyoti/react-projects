import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = ({setIsOver}) => {

    const [time, setTime] = useState(30)
    const [displayTime, setDisplayTime] = useState('')
    let intervalId;


    // time left logic
    useEffect(() => {

        intervalId = setInterval(() => {

            setTime(prevTime => {
                // for clearing and return the interval after 5 sec
                if (prevTime <= 0) {
                    clearInterval(intervalId)
                    // setIsOver(true)
                    return 0

                }
                return prevTime - 1
            })
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    // Format logic
    useEffect(() => {
        if(time === 0){
            setIsOver(true)
        }
        let formatedTime = (`${Math.floor(time / 60).toString().padStart(2, 0)}:${Math.floor(time % 60).toString().padStart(2, 0)}`)
        setDisplayTime(formatedTime)
    }, [time])


    return (
        <div>
            <h2>Timer Left: {displayTime}</h2>
        </div>
    )
}

export default Timer