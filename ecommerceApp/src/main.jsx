
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'
import SingleProduct from './Components/SingleProduct.jsx'

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            }
            ,
            {
                path: '/products/:id',
                element: <SingleProduct />
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(

    <>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </>

)
