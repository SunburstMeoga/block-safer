import React, { useState } from 'react'
import { downloadMethodItems } from '../utils/dictionary'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';

// 导入 Swiper 样式
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cards';
const About = () => {
    let [downMethod, setDownMethod] = useState(downloadMethodItems)
    return (
        <div className=' bg-black  xl:pt-0-1 lg:bg-transparent lg:pt-0-1'>
            <div className='w-full pt-4-4 lg:hidden'></div>
            <div className='w-full h-70-3 bg-no-repeat bg-cover bg-center bg-about-module-download lg:bg-no-repeat lg:bg-pad-about-module-download lg:h-44-8 xl:bg-pc-about-module-download xl:h-66-4'>
                <div className='w-full pt-7-3 px-7-9 mb-1-2 lg:flex lg:justify-center lg:items-center lg:pt-13-1'>
                    <div className='lg:w-8-8 xl:w-15-6'>
                        <img src='/images/phone/logo-white.png' alt=''></img>
                    </div>

                </div>
                <div className='text-white text-2-2 leading-1-8 font-medium w-full text-center mb-5-1 lg:mb-8-1 xl:text-4-0 xl:mb-16-0'>
                    Block Safer
                </div>
                <div className='w-full flex flex-col justify-start items-center lg:flex-row lg:justify-between lg:px-6-3'>
                    {downMethod.map((item, index) => {
                        return <div key={index} className='mb-5-7 flex flex-col justify-start items-center xl:flex-row'>
                            <div className='w-2-7 mb-0-9 xl:mr-1-0 xl:w-3-8 xl:mb-auto'>
                                <img src={item.img}></img>
                            </div>
                            <div className='text-white text-1-2 font-semibold xl:text-2-0'>{item.title}</div>
                        </div>
                    })}
                </div>
            </div>
            <div className='w-full h-38-4 bg-black pt-4-9 lg:h-auto'>
                <div className='pl-1-8 mb-2-3 lg:pl-6-0 lg:mb-auto'>
                    <div className='text-module-title text-2-0 mb-1-0 lg:text-2-5 xl:text-4-0'>Advantages</div>
                    <div className='text-1-2 text-about-adv lg:text-1-5 xl:text-3-0'>
                        What makes block <br className='lg:hidden'></br> safer stand out
                    </div>
                </div>
                <div className='w-full flex justify-center items-center text-white px-3-8 overflow-hidden lg:hidden'>
                    <div className='w-full'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/advantages-speed.png' alt=''></img>
                                    </div>
                                    <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        Efficient blockchain transactions --
                                    </div>
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Confirmation speed
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a11@4x.png' alt=''></img>
                                    </div>

                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Absolute privacy and security
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a1.png' alt=''></img>
                                    </div>

                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Seamlessly integrate with mainstream blockchain networks
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a12@4x.png' alt=''></img>
                                    </div>

                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Accessible worldwide questions and compatibility
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a3 1.png' alt=''></img>
                                    </div>
                                    <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div>
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Easy to get started
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a5.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Excellent performance
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a14@4x.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Built-in smart contract interaction function
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a13@4x.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Unparalleled reliability and stability
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a10@4x.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Real-time updates and security patches ensure system health

                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a2.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Unrivaled security

                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a9@4x.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Absolute privacy and security


                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='rounded-2xl overflow-hidden'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a6.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Track and manage
                                        Asset management is more convenient


                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='hidden lg:flex bg-no-repeat bg-pad-ad-module w-full h-54-4 justify-center  items-center text-white'>
                    <Swiper
                        // 配置分页
                        pagination={{
                            clickable: true,
                            dynamicBullets: false, // 动态显示分页点
                            renderBullet: () => '',
                        }}
                        modules={[Pagination]}
                    >
                        {/* 添加一些示例滑块 */}
                        <SwiperSlide className='rounded-2xl overflow-hidden '>
                            <div className='flex justify-around items-center w-full'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/advantages-speed.png' alt=''></img>
                                    </div>
                                    <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        Efficient blockchain transactions --
                                    </div>
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Confirmation speed
                                    </div>
                                </div>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a11@4x.png' alt=''></img>
                                    </div>

                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Absolute privacy and security
                                    </div>
                                </div>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a1.png' alt=''></img>
                                    </div>

                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Seamlessly integrate with mainstream blockchain networks
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='rounded-2xl overflow-hidden'>
                            <div className='flex justify-around items-center w-full'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a12@4x.png' alt=''></img>
                                    </div>

                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Accessible worldwide questions and compatibility
                                    </div>
                                </div>

                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a3 1.png' alt=''></img>
                                    </div>
                                    <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div>
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Easy to get started
                                    </div>
                                </div>

                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a5.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Excellent performance
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='rounded-2xl overflow-hidden'>
                            <div className='flex justify-around items-center w-full'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a14@4x.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Built-in smart contract interaction function
                                    </div>
                                </div>


                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a10@4x.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Real-time updates and security patches ensure system health

                                    </div>
                                </div>

                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a2.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Unrivaled security

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='rounded-2xl overflow-hidden'>
                            <div className='flex justify-around items-center w-full'>
                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a2.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Unrivaled security

                                    </div>
                                </div>

                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a6.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Track and manage
                                        Asset management is more convenient


                                    </div>
                                </div>


                                <div className='w-17-5 h-17-0 bg-advantages-item rounded-2xl pt-2-2  pl-2-0'>
                                    <div className='w-6-8 '>
                                        <img src='/images/phone/a9@4x.png' alt=''></img>
                                    </div>
                                    {/* <div className='text-0-8 w-2/3 leading-1-1 font-bold '>
                                        user friendly interface
                                    </div> */}
                                    <div className='text-1-3 leading-2-5 font-bold '>
                                        Absolute privacy and security


                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default About
