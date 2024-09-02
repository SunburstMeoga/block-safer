import React from 'react'
import { useNavigate } from 'react-router-dom'
const FooterBar = () => {
  const navigate = useNavigate()
  const socialMediaItems = [{ icon: 'icon-tuite', link: '' }, { icon: 'icon-Linkedin', link: '' }, { icon: 'icon-instagram', link: '' }, { icon: 'icon-discord', link: '' },]
  const handlePrivacyPolicy = () => {
    console.log('object')
    navigate('/privacy-policy')
  }
  return (
    <>
      <div className='w-full bg-black'>
        <div className='w-full px-1-7 pt-2-9 flex justify-start items-center mb-3-2 lg:pt-4-5 lg:mb-4-2 lg:px-6-0 xl:px-9-0 xl:mb-2-3'>
          <div className='w-3-9'>
            <img className='' src='/images/phone/footer-logo.png' alt='logo'></img>
          </div>
          <div className='ml-1-3 text-2-0 text-footer-logo lg:ml-2-5 xl:ml-2-3'>Block Safer</div>
        </div>
        <div className='w-full pl-1-7 pr-1-0 text-module-title text-2-0 leading-2-6 mb-2-1 lg:text-3-0 lg:px-6-0 xl:px-9-0 lg:leading-4-4 lg:font-medium lg:mb-5-0 xl:text-3-0 xl:font-light xl:mb-4-8'>
          Use Safe Neighborhood to help <br className='hidden lg:block xl:hidden'></br> you organize  <br className='hidden xl:block'></br> your finances today.
        </div>
        <div className='w-full pl-1-7 text-footer-logo text-1-2 font-medium leading-1-5 mb-5-1 lg:px-6-0 xl:px-9-0 lg:text-2-0 lg:leading-2-8 lg:mb-4-5'>
          A one-stop intelligent <br className='lg:hidden'></br> management <br className='hidden lg:block'></br> platform for <br className='lg:hidden'></br> digital wallets.
        </div>
        {/* <div className='w-full pl-1-7 text-footer-logo lg:hidden'>
          <div className='flex justify-start items-center mb-2-0'>
            <div className='w-0-4 h-0-4 bg-footer-logo'></div>
            <div className='ml-1-0 text-1-5 font-semibold'>Website support</div>
          </div>
          <div className='pl-1-4 text-1-2 mb-2-0'>Community</div>
          <div className='pl-1-4 text-1-2 mb-2-0'>Technical Support</div>
        </div> */}
        <div className='w-full h-0-1 bg-footer-logo mb-2-2'></div>
        <div className='w-full lg:flex justify-between items-center lg:px-2-0 lg:pb-7-0 xl:px-5-7 xl:pb-5-4'>
          <div className=''>
            <div onClick={() => handlePrivacyPolicy()} className='w-full px-3-3 text-footer-word flex justify-between items-center mb-2-0'>
              <div className='text-1-0 lg:font-bold'>Privacy Policy</div>
              <div className='text-1-0 icon iconfont icon-right ml-0-2 '></div>
            </div>
            <div className='w-full px-3-3 text-footer-word flex justify-between items-center mb-2-0'>
              <div className='text-1-0 lg:font-bold'>Please follow our social platforms</div>
              <div className='text-1-0 icon iconfont icon-right ml-0-2 '></div>
            </div>
            <div className='w-full px-3-3 flex justify-between items-center pb-3-2 text-footer-word'>
              {socialMediaItems.map((item, index) => {
                return <div key={index} className={`icon iconfont text-2-0 ${item.icon}`}></div>
              })}
            </div>
          </div>
          {/* <div className='hidden text-footer-logo pr-4-0 lg:block lg:mt-2-0 xl:pr-5-7'>
            <div className='flex justify-start items-center mb-2-0'>
              <div className='text-1-5 font-semibold'>Website support</div>
            </div>
            <div className='text-1-2 mb-2-0'>Community</div>
            <div className='text-1-2 mb-2-0'>Technical Support</div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default FooterBar
