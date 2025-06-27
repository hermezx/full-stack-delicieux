import React from 'react'
import MenuList from '../components/MenuList.jsx'
import Navbar from '../components/Navbar.jsx'

const MenuPage = () => {
  return (
    <div className='menu-page'>
        <Navbar />
        <MenuList/>
    </div>
  )
}

export default MenuPage