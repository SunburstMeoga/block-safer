import React from 'react'

const FooterBar = () => {
  const socialMediaItems = [{ icon: 'icon-tuite', link: '' }, { icon: 'icon-Linkedin', link: '' }, { icon: 'icon-instagram', link: '' }, { icon: 'icon-discord', link: '' },]
  return (
    <>
      <div className='w-full bg-black'>
        <div className='w-full px-1-7 pt-2-9 flex justify-start items-center mb-3-2'>
          <div className='w-3-9'>
            <img className='' src='/images/phone/footer-logo.png'></img>
          </div>
          <div className='ml-1-3 text-2-0 text-footer-logo'>Block Saver</div>
        </div>
        <div className='w-full pl-1-7 pr-1-0 text-module-title text-2-0 leading-2-6 mb-2-1'>
          Use Safe Neighborhood to help you organize your finances today.
        </div>
        <div className='w-full pl-1-7 text-footer-logo text-1-2 font-medium leading-1-5 mb-5-1'>
          A one-stop intelligent <br></br> management platform for <br></br> digital wallets.
        </div>
        <div className='w-full pl-1-7 text-footer-logo'>
          <div className='flex justify-start items-center mb-2-0'>
            <div className='w-0-4 h-0-4 bg-footer-logo'></div>
            <div className='ml-1-0 text-1-5 font-semibold'>Website support</div>
          </div>
          <div className='pl-1-4 text-1-2 mb-2-0'>Community</div>
          <div className='pl-1-4 text-1-2 mb-2-0'>Technical Support</div>
        </div>
        <div className='w-full h-0-1 bg-footer-logo mb-2-2'></div>
        <div className='w-full'>
          <div className='w-full px-3-3 text-footer-word flex justify-between items-center mb-2-0'>
            <div className='text-1-0'>Please follow our social platforms</div>
            <div className='text-1-0 icon iconfont icon-right ml-0-2 '></div>
          </div>
          <div className='w-full px-3-3 flex justify-between items-center pb-3-2 text-footer-word'>
            {socialMediaItems.map((item, index) => {
              return <div key={index} className={`icon iconfont text-2-0 ${item.icon}`}></div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterBar
