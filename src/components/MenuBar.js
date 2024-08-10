import React, { useState } from 'react'
import { menuItems } from '../utils/dictionary'
const MenuBar = () => {
  let [currentMenu, changeCurrentMenu] = useState(1)
  const handleMenuItem = ({ id }) => {
    changeCurrentMenu(id)
    console.log(currentMenu)
  }
  return (
    <div>
      <div className='w-full px-1-0 flex justify-between items-center h-4-5  fixed z-20 bg-menu-bar lg:h-6-0 xl:bg-transparent xl:px-1-9'>
        <div className='flex justify-start items-center'>
          <div className='w-3-9'>
            <img src='/images/phone/logo.png' alt=''></img>
          </div>
          <div className='text-white text-1-0 lg:text-1-3 xl:ml-0-5'>Block Saver</div>
        </div>
        <div className='flex justify-end items-center'>
          <div className='flex justify-center items-center bg-primary-yellow font-bold text-1-0 text-gray-menu w-4-3 h-1-8 rounded-lg lg:hidden'>
            Eng
          </div>
          <div className='hidden xl:flex justify-end items-center'>
            {menuItems.map((item, index) => {
              return <div key={index} onClick={() => handleMenuItem(item)} className={`${currentMenu === item.id ? ' text-primary-yellow text-1-2' : 'text-white font-normal text-1-0'} w-9-5 text-center cursor-pointer hover:text-primary-yellow transition ease-in duration-300`}>
                {item.title}
              </div>
            })}
          </div>
          <div className='hidden cursor-pointer lg:flex justify-center items-center px-1-5 py-0-7 text-black bg-primary-yellow rounded-full'>
            <div className='text-1-5 xl:text-1-0 xl:font-semibold'>中文 </div>
            <div className='text-0-9 xl:text-1-0 xl:font-semibold'>/ English</div>
          </div>
          <div className='icon iconfont icon-menu text-menu-icon text-1-8 ml-1-5 lg:ml-2-2 xl:hidden' ></div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
