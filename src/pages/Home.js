
const Home = () => {
  const handleDownloadClick = () => {
    console.log('click')
    window.open('/Block Safer v2.4.2.apk', '_blank');
  };
  return (
    <>
      <div className='pt-4-4 bg-black lg:pt-6-0 xl:pt-0-1'>
        <div className='w-full h-auto animate__animated animate__fadeIn' >
          {/* <img src='/images/phone/home-module-download.png' alt="" className='lg:hidden'></img>
          <img src='/images/pad/home-module-download.png' alt="" className='hidden lg:block xl:hidden'></img>
          <img src='/images/pc/home-module-download.png' alt="" className='hidden xl:block'></img> */}
          <video
            className=""
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/phone/banner.mp4" type="video/mp4" />
          </video>

        </div>
        <div onClick={() => handleDownloadClick()} className='w-full px-5-6 h-3-3 -mt-1-5 lg:px-18-5 lg:-mt-8-4 lg:h-5-7 relative z-10 xl:-mt-14-3'>
          <div className='bg-home-download-button bg-no-repeat  bg-center w-full h-3-3 text-white text-1-5 flex justify-center items-center cursor-pointer duration-300 transition hover:scale-105 lg:bg-pad-home-download-button lg:h-5-7 lg:text-2-3 xl:bg-pc-home-download-button xl:h-8-3'>
            Download
          </div>
        </div>
        {/* <div className="text-center w-full text-module-title mt-4-0 my-1-0 text-2-0 lg:text-2-5 xl:text-4-0 xl:mt-12-0">Partners</div>
        <div className=" mx-auto w-6-3 lg:w-7-0 xl:w-9-5">
          <img src="/images/phone/partners.png"></img>
        </div> */}
        <div className='w-full flex flex-col justify-start items-center bg-black pt-2-5 h-43-5 lg:h-42-0 lg:pt-3-6 xl:h-67-5 xl:pt-0-1 xl:mt-12-8'>
          <div className=' w-full  bg-home-module-choose bg-no-repeat bg-cover bg-center pt-2-7 lg:bg-pad-home-module-choose xl:bg-pc-home-module-choose xl:h-67-5 xl:pt-7-7'>
            <div className='pl-2-5 mb-1-3 lg:pl-4-6 xl:pl-9-3'>
              <div className='w-5-5 bg-module-title h-0-2 mb-1-0 lg:w-8-8 lg:mb-0-4'></div>
              <div className='text-2-2 mb-0-2 leading-5-6 text-module-title lg:text-2-5 xl:text-4-0'>
                Why choose us
              </div>
              <div className='text-white text-1-0 leading-1-5 xl:text-1-2 xl:leading-2-4'>
                Here's everything you <br className="xl:hidden"></br> need to <br className="hidden xl:block"></br> manage your <br className="xl:hidden"></br> digital assets
              </div>
            </div>
            <div className='relative z-10   w-full bg-home-choose-banner bg-no-repeat  bg-center flex justify-start items-center text-white h-24-8 lg:h-33-5 lg:-mt-10-0 lg:bg-pad-home-choose-banner lg:justify-center lg:items-center xl:bg-pc-home-choose-banner xl:h-57-8 xl:-mt-16-0'>
              <div className='flex flex-col items-center justify-start px-2-0  h-23-9 lg:h-33-5 lg:px-0-1 xl:h-57-8'>
                <div className='font-medium px-5-5 pl-7-5 mb-4-1 mt-2-8 lg:mt-4-9 xl:mt-9-0 xl:mb-12-0'>
                  <div className='text-1-2  mb-0-3 xl:text-2-0 xl:mb-3-0'>Save costs</div>
                  <div className='text-0-8 leading-1-1 lg:hidden'>Compared with traditional mining, it will save 99.5% of energy consumption.</div>
                  <div className='hidden leading-1-1 lg:block font-medium text-0-9 '>Use proof-of-stake as a <br className="xl:hidden"></br> mining method <br className="hidden xl:block"></br>.Compared <br className="xl:hidden"></br> with traditional mining, it will <br></br> save 99.5% of energy  <br className="xl:hidden"></br>consumption.</div>
                </div>
                <div className='flex justify-around items-center w-full'>
                  <div className='font-medium w-8-8 pl-1-0 lg:w-11-3 lg:pl-0-1 xl:w-15-7'>
                    <div className='text-1-2  mb-0-3 xl:text-2-0'>Fast Trading</div>
                    <div className='text-0-8 leading-1-1 lg:hidden'>Here you will enjoy a 1,000,000tps self-service trading experience</div>
                    <div className='leading-1-1 hidden lg:block font-medium text-0-9'>Here you will enjoy a 1,000,000tps self-trading experience and can complete transactions in an instant.</div>

                  </div>
                  <div className='font-medium w-8-8 pl-1-0 lg:w-11-3 lg:pl-2-0 xl:w-20-7  xl:pl-9-1'>
                    <div className='text-1-2  mb-0-3 xl:text-2-0'>Efficient management</div>
                    <div className='text-0-8 leading-1-1 lg:hidden'>Improve asset usage efficiency.</div>
                    <div className="leading-1-1 hidden lg:block font-medium text-0-9">Supports the creation of multiple wallets, efficiently manages digital assets, and improves asset usage efficiency.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='h-47-8 bg-center  bg-no-repeat bg-cover bg-home-module-advantage relative  lg:bg-pad-home-module-advantage lg:h-80-0 xl:h-92-8 xl:bg-pc-home-module-advantage'>
          <div className='pt-3-4 text-module-title text-2-2 flex justify-center items-center lg:text-2-5 xl:text-4-0 xl:pt-4-7'>
            Our Advantage
          </div>
          <div onClick={() => handleDownloadClick()} className='w-full px-5-6 absolute bottom-0-6 xl:bottom-0-1'>
            <div className='bg-home-download-button bg-no-repeat  bg-center w-full h-3-3 text-white text-1-5 flex justify-center items-center  lg:bg-pad-home-download-button lg:h-5-7 lg:text-2-3 xl:bg-pc-home-download-button xl:h-8-3'>
              Download
            </div>
          </div>
        </div>

        <div className='w-full  flex flex-col justify-start items-center mt-2-0 lg:mt-3-0 xl:mt-8-2'>
          <div className='flex flex-col justify-start items-center px-2-7 text-module-title text-2-2 mb-1-0 lg:text-2-5 lg:mb-2-6 xl:text-4-0'>
            Installation Steps
          </div>
          <div className='w-full h-13-7 flex justify-between items-center text-module-title lg:h-36-0 xl:h-67-5'>
            <div className="w-1/3 bg-install-download flex flex-col justify-start items-center  h-13-7 lg:h-36-0 xl:h-67-5">
              <div className="text-1-0 font-medium mt-1-2 mb-2-0 lg:text-2-0 lg:mb-6-0 lg:mt-2-4 xl:text-3-0  xl:mt-5-9 xl:mb-15-0">Download</div>
              <div className="w-5-9 lg:w-15-4 xl:w-28-9">
                <img src='/images/phone/install-download.png'></img>
              </div>
            </div>
            <div className="w-1/3 bg-install-create flex flex-col justify-start items-center h-13-7 lg:h-36-0 xl:h-67-5">
              <div className="text-1-0 font-medium mt-1-2 mb-1-0 lg:text-2-0 lg:mb-4-0 lg:mt-2-4 xl:text-3-0  xl:mt-5-9 xl:mb-12-0">Create</div>
              <div className="w-full">
                <img src='/images/phone/install-create.png'></img>
              </div>
            </div>
            <div className="w-1/3 bg-install-manage flex flex-col justify-start items-center h-13-7 lg:h-36-0 xl:h-67-5">
              <div className="text-1-0 font-medium mt-1-2 mb-2-0 lg:text-2-0 lg:mb-6-0 lg:mt-2-4 xl:text-3-0  xl:mt-5-9 xl:mb-15-0">Manage</div>
              <div className="w-5-5 lg:w-14-4 xl:w-28-9">
                <img src='/images/phone/install-manage.png'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
