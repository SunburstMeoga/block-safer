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
      <div className='pt-4-4 bg-black'>
        <div className='w-full h-auto'>
          <img src='/images/phone/home-module-download.png'></img>
        </div>
        <div className='w-full px-5-6'>
          <div className='bg-home-download-button bg-no-repeat bg-center w-full h-3-3 text-white text-1-5 flex justify-center items-center -mt-1-5 relative z-10'>
            Download
          </div>
        </div>
        <div className='w-full flex flex-col justify-start items-center bg-black pt-2-5 h-43-5 '>
          <div className='w-full bg-cover bg-home-module-choose bg-no-repeat bg-center pt-2-7'>
            <div className='pl-2-5 mb-1-3'>
              <div className='w-5-5 bg-module-title h-0-2 mb-1-0'></div>
              <div className='text-2-2 mb-0-2 leading-5-6 text-module-title'>
                Why choose us
              </div>
              <div className='text-white text-1-0 leading-1-5 '>
                Here's everything you <br></br> need to manage your <br></br> digital assets
              </div>
            </div>
            <div className='w-full bg-home-choose-banner bg-no-repeat bg-center  flex justify-start items-center text-white h-24-8'>
              <div className='flex flex-col items-center justify-start px-2-0  h-23-9'>
                <div className='font-medium px-5-5 mb-4-1 mt-2-8'>
                  <div className='text-1-2  mb-0-3'>Save costs</div>
                  <div className='text-0-7 leading-1-1'>Compared with traditional mining, it will save 99.5% of energy consumption.</div>
                </div>
                <div className='flex justify-between items-center w-full '>
                  <div className='font-medium w-8-8 pl-1-0'>
                    <div className='text-1-2  mb-0-3'>Fast Trading</div>
                    <div className='text-0-7 leading-1-1'>Here you will enjoy a 1,000,000tps self-service trading experience</div>
                  </div>
                  <div className='font-medium w-8-8 pl-1-0'>
                    <div className='text-1-2  mb-0-3'>Efficient management</div>
                    <div className='text-0-7 leading-1-1'>Improve asset usage efficiency.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='h-47-8 bg-center bg-cover bg-no-repeat bg-home-module-advantage relative '>
          <div className='pt-3-4 text-module-title text-2-2 flex justify-center items-center'>
            Our Advantage
          </div>
          <div className='w-full px-5-6 absolute bottom-0-6'>
            <div className='bg-home-download-button bg-no-repeat bg-center w-full h-3-3 text-white text-1-5 flex justify-center items-center -mt-1-5 relative z-10'>
              Download
            </div>
          </div>
        </div>

        <div className='w-full  flex flex-col justify-start items-center mt-2-0'>
          <div className='flex flex-col justify-start items-center px-2-7 text-module-title text-2-2 mb-1-0'>
            Installation Steps
          </div>
          <div className='bg-module-title w-full h-13-7'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
