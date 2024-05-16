import React from 'react'

const MenuBar = () => {
  return (
    <div>
      <div className='w-full px-1-6 flex justify-between items-center py-1-4 fixed z-20 bg-gray-menu'>
        <div className='flex justify-start items-center'>
          <div className='w-3-9'>
            <img src='/images/phone/logo.png' alt=''></img>
          </div>
          <div className='text-white text-1-6 ml-0-6'>Block Saver</div>
        </div>
        <div className='flex justify-center items-center bg-primary-yellow font-bold text-1-2 text-gray-menu w-5-3 h-2-0 rounded-lg'>
        Eng
        </div>
      </div>
    </div>
  )
}

export default MenuBar
