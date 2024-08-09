import React from 'react'

const MenuBar = () => {
  return (
    <div>
      <div className='w-full px-1-0 flex justify-between items-center h-4-5  fixed z-20 bg-menu-bar lg:h-6-0'>
        <div className='flex justify-start items-center'>
          <div className='w-3-9'>
            <img src='/images/phone/logo.png' alt=''></img>
          </div>
          <div className='text-white text-1-0 lg:text-1-3'>Block Saver</div>
        </div>
        <div className='flex justify-end items-center'>
          <div className='flex justify-center items-center bg-primary-yellow font-bold text-1-0 text-gray-menu w-4-3 h-1-8 rounded-lg lg:hidden'>
            Eng
          </div>
          <div className='hidden lg:flex justify-center items-center px-1-5 py-0-7 text-black bg-primary-yellow rounded-full'>
            <div className='text-1-5'>中文 </div>
            <div className='text-0-9'>/ English</div>
          </div>
          <div className='icon iconfont icon-menu text-menu-icon text-1-8 ml-1-5 lg:ml-2-2' ></div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
