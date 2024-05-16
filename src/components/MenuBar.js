import React from 'react'

const MenuBar = () => {
  return (
    <div>
      <div className='w-full px-1-6 flex justify-between items-center py-1-4'>
        <div className='flex justify-start items-center'>
          <div className='w-3-9'>
            <img src='/images/phone/logo.png' alt=''></img>
          </div>
          <div className='text-white text-1-6'>Block Saver</div>
        </div>
        <div className='flex justify-end items-center '>
          <div className='text-primary-yellow font-bold text-1-0 mr-0-8'>Eng</div>
          <div className='icon iconfont icon-down text-white'></div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
