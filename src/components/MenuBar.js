import React from 'react'

const MenuBar = () => {
  return (
    <div>
      <div className='w-full px-1-0 flex justify-between items-center h-4-5 fixed z-20 bg-menu-bar'>
        <div className='flex justify-start items-center'>
          <div className='w-3-9'>
            <img src='/images/phone/logo.png' alt=''></img>
          </div>
          <div className='text-white text-1-0'>Block Saver</div>
        </div>
        <div className='flex justify-end items-center'>

          <div className='flex justify-center items-center bg-primary-yellow font-bold text-1-0 text-gray-menu w-4-3 h-1-8 rounded-lg'>
            Eng
          </div>
          <div className='icon iconfont icon-menu text-menu-icon text-1-8 ml-1-5' ></div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
