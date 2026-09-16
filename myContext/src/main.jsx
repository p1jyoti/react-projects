import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { myContext, MyContextProvider } from './MyContext.jsx'


// wrapping the mycontext to share the data [2]

createRoot(document.getElementById('root')).render(


  
  // <myContext.Provider value={"Mr India"}>
  //   <App />
  // </myContext.Provider>

  // <MyContextProvider children={<App />} />

  <MyContextProvider>
    <App />
  </MyContextProvider>

)
