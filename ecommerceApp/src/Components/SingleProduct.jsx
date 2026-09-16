import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'

const SingleProduct = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response);
        let data = response.data
        console.log(data);
        setProduct(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [id])

    if (loading) {
        return <Loader />
    }

    return (
        <div key={id} className=' py-3 px-5 flex gap-2  min-h-screen'>

            <img className='aspect-square object-contain p-4 min-h-screen bg-gray-900 rounded-2xl h-full ' src={product?.image} alt="Clothing Image" />
            <div className='px-5 py-5 bg-gray-900 rounded-2xl flex flex-col gap-5'>
                <h3 className='text-4xl text-white '>{product?.title}</h3>
                <h3 className='bg-green-700 w-fit rounded-lg text-white p-1'>Category: {product?.category}</h3>
                <p className='text-xl text-mono'>Description: {product?.description}</p>
                <p className=' text-mono text-white font-extrabold text-2xl w-fit'>${product?.price}</p>

                <div className='flex gap-2 py-2 products-center'>
                    <p className='bg-green-700 w-fit p-1 rounded-lg text-white '>⭐{product?.rating.rate}/5</p>
                    <p>({product?.rating.count})</p>
                </div>
            </div>




        </div>



    )

}

export default SingleProduct