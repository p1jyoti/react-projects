import React from 'react'
import { NavLink } from 'react-router-dom'
import store from '../assets/store.png';

const Navbar = () => {

  return (
    <>
      <div className='bg-gray-900 text-white font-semibold flex gap-10 text-3xl items-center py-2 px-8'>
        <img src={store} alt="Store PNG" height={"10px"} style={{ width: '40px', height: '40px' }} />
        <Menu to={'/'} title={'Home'} />
        <Menu to={'/products'} title={'Products'} />

        <Menu to={'/help'} title={'Help'} />
        <Menu to={'/contact'} title={'Contact Us'} />
      </div>
    </>
  )
}

const Menu = ({ to, title }) => {
  return (
    <NavLink className={({ isActive }) => isActive ? "text-red-600 hover:text-red-800 transition duration-100 " : ""} to={to} >{title}</NavLink>
  )
}

export default Navbar 