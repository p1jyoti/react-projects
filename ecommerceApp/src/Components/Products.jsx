import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'

const Products = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const navigate = useNavigate()

  const fetchData = async () => {
    setLoading(true)
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response);
    let data = response.data
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <Loader />

  return (
    <div>
      <div className=' grid grid-cols-5 gap-4 h-auto mt-2 px-2 py-3 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2'>

        {
          data.map((item) => {

            return (
              <div onClick={() => navigate(`/products/${item.id}`)} key={item.id} className='group bg-gray-900 rounded-lg  p-4 font-medium '>

                <img className='aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400' src={item.image} alt="Clothing Image" />
                <h3 className=' bg-gray-900 text-s group-hover:text-white'>{item.title}</h3>

                <div>
                  <div className='flex gap-2 py-2 items-center'>
                    <p className='bg-green-700 w-fit p-1 rounded-lg text-white '>⭐{item.rating.rate}/5</p>
                    <p>({item.rating.count})</p>
                  </div>
                  <p className='text-xl text-mono text-white'>${item.price}</p>

                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products