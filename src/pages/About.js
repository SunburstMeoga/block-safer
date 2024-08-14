import React, { useState } from 'react'
import { downloadMethod, downloadMethodItems } from '../utils/dictionary'
const About = () => {
    let [downMethod, setDownMethod] = useState(downloadMethodItems)
    return (
        <div className=' bg-black lg:pt-6-0 xl:pt-0-1'>
            <div className='w-full pt-4-4'></div>
            <div className='w-full h-70-3 bg-no-repeat bg-center bg-about-module-download'>
                <div className='w-full pt-7-3 px-7-9 mb-1-2'>
                    <div className=''>
                        <img src='/images/phone/logo-white.png' alt=''></img>
                    </div>

                </div>
                <div className='text-white text-2-2 leading-1-8 font-medium w-full text-center mb-5-1'>
                    Block Safer
                </div>
                <div className='w-full flex flex-col justify-start items-center'>
                    {downMethod.map((item, index) => {
                        return <div key={index} className='mb-5-7 flex flex-col justify-start items-center'>
                            <div className='w-2-7 mb-0-9'>
                                <img src={item.img}></img>
                            </div>
                            <div className='text-white text-1-2 font-semibold'>{item.title}</div>
                        </div>
                    })}
                </div>
            </div>
            <div className='w-full h-38-4 bg-black pt-4-9'>
                <div className='pl-1-8'>
                    <div className='text-module-title text-2-0 mb-1-0'>Advantages</div>
                    <div className='text-1-2 text-about-adv'>
                        What makes block <br></br> safer stand out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
