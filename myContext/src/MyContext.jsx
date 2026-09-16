
import { createContext, useContext, useState } from "react";

// creating the context [1] /store
const myContext = createContext()


// own hook for providing the data [this is minimize importing the myContext then useContext(provider)]
const useMyContext = () => useContext(myContext)


// wrapping the data 
const MyContextProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    //it is accesible for all // 
    const value = {

        count,
        setCount
    }


    return (
        // both are valid
        
        // <myContext.Provider value={value}>
        //     {children}
        // </myContext.Provider>

        <myContext.Provider value={{ count, setCount }}>
            {children}
        </myContext.Provider>
    )
}

export { myContext, useMyContext, MyContextProvider }