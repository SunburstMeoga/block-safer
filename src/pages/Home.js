
const Home = () => {
  return (
    <>
      <div className='pt-4-4 bg-black lg:pt-6-0 xl:pt-0-1'>
        <div className='w-full h-auto ' >
          <img src='/images/phone/home-module-download.png' alt="" className='lg:hidden'></img>
          <img src='/images/pad/home-module-download.png' alt="" className='hidden lg:block xl:hidden'></img>
          <img src='/images/pc/home-module-download.png' alt="" className='hidden xl:block'></img>
        </div>
        <div className='w-full px-5-6 h-3-3 -mt-1-5   lg:px-18-5 lg:-mt-8-4 lg:h-5-7 relative z-10 xl:-mt-14-3'>
          <div className='bg-home-download-button bg-no-repeat bg-center w-full h-3-3 text-white text-1-5 flex justify-center items-center cursor-pointer duration-300 transition hover:scale-105 lg:bg-pad-home-download-button lg:h-5-7 lg:text-2-3 xl:bg-pc-home-download-button xl:h-8-3'>
            Download
          </div>
        </div>
        <div className='w-full flex flex-col justify-start items-center bg-black pt-2-5 h-43-5 lg:h-42-0 lg:pt-3-6 xl:h-67-5 xl:pt-0-1 xl:mt-12-8'>
          <div className='w-full bg-cover bg-home-module-choose bg-no-repeat bg-center pt-2-7 lg:bg-pad-home-module-choose xl:bg-pc-home-module-choose xl:h-67-5 xl:pt-7-7'>
            <div className='pl-2-5 mb-1-3 lg:pl-4-6 xl:pl-9-3'>
              <div className='w-5-5 bg-module-title h-0-2 mb-1-0 lg:w-8-8 lg:mb-0-4'></div>
              <div className='text-2-2 mb-0-2 leading-5-6 text-module-title lg:text-2-5 xl:text-4-0'>
                Why choose us
              </div>
              <div className='text-white text-1-0 leading-1-5 xl:text-1-2 xl:leading-2-4'>
                Here's everything you <br className="xl:hidden"></br> need to <br className="hidden xl:block"></br> manage your <br className="xl:hidden"></br> digital assets
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

        <div className='h-47-8 bg-center bg-cover bg-no-repeat bg-home-module-advantage relative  lg:bg-pad-home-module-advantage lg:h-80-0 xl:h-92-8 xl:bg-pc-home-module-advantage'>
          <div className='pt-3-4 text-module-title text-2-2 flex justify-center items-center lg:text-2-5 xl:text-4-0 xl:pt-4-7'>
            Our Advantage
          </div>
          <div className='w-full px-5-6 absolute bottom-0-6 xl:bottom-0-1'>
            <div className='bg-home-download-button bg-no-repeat bg-center w-full h-3-3 text-white text-1-5 flex justify-center items-center  lg:bg-pad-home-download-button lg:h-5-7 lg:text-2-3 xl:bg-pc-home-download-button xl:h-8-3'>
              Download
            </div>
          </div>
        </div>

        <div className='w-full  flex flex-col justify-start items-center mt-2-0 lg:mt-3-0 xl:mt-8-2'>
          <div className='flex flex-col justify-start items-center px-2-7 text-module-title text-2-2 mb-1-0 lg:text-2-5 lg:mb-2-6 xl:text-4-0'>
            Installation Steps
          </div>
          <div className='bg-module-title w-full h-13-7 lg:h-36-0 xl:h-67-5'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
