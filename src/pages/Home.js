import React, { useState } from 'react'
import { downloadMethod,whyChooseUs } from '@/utils/dictionary'
const Home = () => {
  let [downMethod, changeDownMethod] = useState(0)
  const handleDownMethod = (index) => {
    changeDownMethod(downMethod = index)
    console.log(downMethod)
  }
  return (
    <div className='text-1-0'>
      <div className='text relative overflow-hidden pb-3-8'>
        <div className='absolute top-0-1'>
          <img src='/images/phone/home-bg-one.png' alt=''></img>
        </div>
        <div className='relative home-title-text-gradient z-10 w-full flex flex-col justify-start items-center '>
          <div className='font-black text-2-3  pt-7-5'>
            Manage it all in this
          </div>
          <div className='w-full -mt-8-4'>
            <img src='/images/phone/home-banner.png' className='' alt=''></img>
          </div>
          <div className=' w-full pl-2-3 -mt-7-0'>
            <div className='flex flex-col justify-start items-start text-3-0 text-primary-yellow font-bold'>
              <div>New</div>
              <div>HashAhead</div>
              <div>wallet.</div>
            </div>
            <div className='text-white font-semibold text-1-3 mt-0-7 w-19-3 line-height-1-2'>
              The wallet gives you access to your funds and the HashAhead ecosystem. Only you can access your wallet
            </div>
          </div>
          <div className='w-22-0 mt-2-2'>
            {downloadMethod.map((item, index) => {
              return <div onClick={() => handleDownMethod(index)} key={index} className={['bg-download-card border-2 rounded-xl w-full py-1-6 flex justify-center items-center mb-1-4', index === downMethod ? 'border-card-line' : 'border-download-card'].join(" ")}>
                <div style={{ fontSize: '2rem' }} className={[`text-primary-yellow icon iconfont ${item.icon}`].join(" ")}></div>
                {/* <div className='icon iconfont icon-down text-white'></div> */}
                <div className={['font-medium text-1-9 ml-0-8', index === downMethod ? 'text-primary-yellow' : 'text-white'].join(" ")}>{item.title}</div>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className='bg-card-white pt-5-0 w-full relative'>
        <div className='text absolute right-auto top-7-6'>
          <img className='' src='/images/phone/home-bg-tow.png' alt=''></img>
        </div>
        <div className='text-4-0 font-extrabold pl-1-3 relative z-10'>
          <div className='text-title-word'>Why <br></br>Choose us</div>
          <div className='line-height-point-149-2 text-1-5 font-semibold w-18-6 mt-2-9'>Here's everything you need to manage your digital assets</div>
        </div>
        <div className='w-22-5 flex flex-col justify-start items-center'>
          {whyChooseUs.map((item, index) => {
            <div key={index} className='w-full flex flex-col justify-start items-center'>
              <div className='w-full h-0-1 bg-title-word mb-2-7'></div>
              <div className='flex justify-start items-center'>
                <div className='w-0-9 h-0-9 bg-title-word mr-1-8'></div>
                <div className='text-title-word'>
                  <div className=''></div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default Home
