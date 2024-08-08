import React, { useState } from 'react'
import { downloadMethod, whyChooseUs } from '@/utils/dictionary'
const Home = () => {
  let [downMethod, changeDownMethod] = useState(0)
  const handleDownMethod = (index) => {
    changeDownMethod(downMethod = index)
    console.log(downMethod)
  }
  return (
    <>
      <div className=''>
        <div className='bg-top bg-cover bg-no-repeat bg-phone-home-module-manage text-black h-auto pb-2-4' >
          <div className='w-full flex flex-col justify-start items-center px-1-6'>
            <div className='font-black text-2-2 pt-6-8 pb-0-2 bg-gradient-home-title text-transparent bg-clip-text'>
              Manage it all in this
            </div>
            <div className='w-full -mt-6-8'>
              <img src='/images/phone/manage-banner.png'></img>
            </div>
            <div className='text-3-0 text-primary-yellow font-bold w-full -mt-5-6 px-0-8 text-shadow '>
              New <br></br>
              HashAhead <br></br>
              wallet.
            </div>
            <div className='text-white font-semibold text-1-3 mt-0-7 w-19-3 line-height-1-2 mb-2-2'>
              The wallet gives you access to your funds and the HashAhead ecosystem. Only you can access your wallet
            </div>
            <div className='w-full'>
              {downloadMethod.map((item, index) => {
                return <div onClick={() => handleDownMethod(index)} key={index} className={['bg-download-card border-2 rounded-xl w-full py-1-6 flex justify-center items-center mb-1-4', index === downMethod ? 'border-card-line' : 'border-download-card'].join(" ")}>
                  <div className={`text-primary-yellow icon iconfont text-2-0 ${item.icon}`}></div>
                  <div className={['font-medium text-1-9 ml-0-8', index === downMethod ? 'text-primary-yellow' : 'text-white'].join(" ")}>{item.title}</div>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className='bg-top bg-cover bg-no-repeat bg-phone-home-module-choose h-auto pt-5-0'>
          <div className='w-full flex flex-col justify-start items-center px-1-6'>
            <div className=''>
              <div className='text-4-0 font-extrabold '>
                <div className='text-title-word'>Why <br></br>Choose us</div>
                <div className='line-height-point-149-2 text-1-5 font-semibold mt-2-9'>Here's everything you <br></br> need to manage your <br></br> digital assets</div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-start items-center ml-auto mr-auto mt-3-8'>
              {whyChooseUs.map((item, index) => {
                return <div key={index} className='w-full flex flex-col justify-start items-start mb-2-7'>
                  <div className='w-full h-0-1 bg-title-word mb-2-7'></div>
                  <div className='flex justify-start items-start'>
                    <div className='w-0-9 h-0-9 bg-title-word mr-1-8 mt-0-6'></div>
                    <div className='text-title-word w-17-0'>
                      <div className='text-2-0 font-extrabold text-title-word mb-2-5'>{item.title}</div>
                      <div className='text-1-3 font-semibold line-height-number-69 w-16-3'>{item.content}</div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className='bg-top bg-cover bg-no-repeat bg-phone-home-module-advantage h-46-2 flex flex-col justify-start items-center'>
          <div className='text-module-title text-3-0 font-extrabold text-center mt-2-3'>
            <div>Our<br></br>Advantage</div>
          </div>
        </div>
      </div>
    </>
    // <div className=''>
    //   
    //   <div className='bg-card-white w-full relative'>
    //     <div className='text absolute right-auto'>
    //       <img className='' src='/images/phone/home-bg-tow.png' alt=''></img>
    //     </div>
    //     <div className='text-4-0 font-extrabold pl-1-3 relative z-10 pt-7-0 '>
    //       <div className='text-title-word'>Why <br></br>Choose us</div>
    //       <div className='line-height-point-149-2 text-1-5 font-semibold w-18-6 mt-2-9'>Here's everything you need to manage your digital assets</div>
    //     </div>
    //     <div className='w-24-5 flex flex-col justify-start items-center relative z-10 ml-auto mr-auto mt-3-8'>
    //       {whyChooseUs.map((item, index) => {
    //         return <div key={index} className='w-full flex flex-col justify-start items-start mb-2-7'>
    //           <div className='w-full h-0-1 bg-title-word mb-2-7'></div>
    //           <div className='flex justify-start items-start'>
    //             <div className='w-0-9 h-0-9 bg-title-word mr-1-8 mt-0-6'></div>
    //             <div className='text-title-word w-17-0'>
    //               <div className='text-2-0 font-extrabold text-title-word mb-2-5'>{item.title}</div>
    //               <div className='text-1-3 font-semibold line-height-numnber-69 w-16-3'>{item.content}</div>
    //             </div>
    //           </div>
    //         </div>
    //       })}
    //     </div>
    //   </div>
    //   <div className='bg-title-word relative mt-5-0'>
    //     <div className='text-module-title text-center font-extrabold text-3-0 pt-2-4'>Our<br></br>Advantage</div>
    //   </div>

    // </div>
  )
}

export default Home
