import React, { useState } from 'react'
import { versionInfoItems } from '../utils/dictionary'
const SupportAssets = () => {
    let infoItems = [
        { title: 'We build bonds of', content: 'trust and cooperation with our users' },
        { title: 'Adhere to', content: 'our commitment to user privacy.' },
        { title: 'Continuously innovate to', content: 'provide safe and reliable digital asset management services' }
    ]
    let advantageItems = [
        { title: 'Safety', img: '/images/phone/support-advantage-safety.png' },
        { title: 'Transparent', img: '/images/phone/support-advantage-trans.png' },
        { title: 'Excellence', img: '/images/phone/support-advantage-exce.png' },
    ]
    let [versionInfoItemsList, setVersionItemShowMore] = useState(versionInfoItems)
    const handleShowMore = ({ id }) => {
        setVersionItemShowMore(versionInfoItems =>
            versionInfoItems.map(item =>
                item.id === id ? { ...item, showMore: !item.showMore } : item))
    }
    return (
        <div className='pt-4-4 bg-support-title lg:pt-6-0 xl:pt-0-1'>
            <div className='w-full bg-no-repeat bg-cover bg-bottom  bg-support-module-info h-60-1 mt-1-5 lg:bg-pad-support-module-info lg:h-72-0 lg:mt-2-5 xl:bg-pc-support-module-info xl:h-67-5  xl:mt-auto'>
                <div className='w-full xl:flex justify-between items-start xl:pt-9-9 '>
                    <div className='w-full px-3-1 lg:px-0-1 lg:mb-23-0 xl:mb-0-1 xl:px-0-1 xl:mt-8-0'>
                        {infoItems.map((item, index) => {
                            return <div key={index} className='mb-2-0 lg:mb-3-4 lg:flex justify-center items-baseline  lg:text-white lg:border-b lg:border-white xl:pl-7-0 xl:w-72-5'>
                                <div className='text-module-title text-1-5  mb-1-0 lg:text-white lg:text-3-0 lg:mb-0-1 lg:font-semibold xl:text-4-0'>{item.title}</div>
                                <div className='text-white text-1-0 lg:text-1-5 lg:ml-1-0 lg:font-semibold '>{item.content}</div>
                            </div>
                        })}
                    </div>
                    <div className='w-full px-1-9 items-center lg:px-3-2  lg:flex lg:justify-between  xl:flex-col xl:justify-start xl:px-0-1 xl:flex-1 xl:pr-12-1'>
                        {advantageItems.map((item, index) => {
                            return <div key={index} className='h-6-3 w-full rounded-3xl bg-primary-yellow10 flex justify-start items-center pl-2-7 mb-1-0 backdrop-blur-xl lg:w-17-0 lg:h-24-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:pl-0-1 xl:w-30-5 xl:h-14-4 xl:rounded-2xl xl:flex-row-reverse xl:justify-around '>
                                <div className='w-4-4 lg:w-10-5 lg:mb-4-8 xl:w-10-6 xl:mb-0-1 '>
                                    <img src={item.img} alt=''></img>
                                </div>
                                <div className='text-primary-yellow ml-2-0 text-1-5 lg:ml-0-1 lg:font-bold lg:text-2-0 '>{item.title}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='w-full h-64-0 bg-no-repeat bg-cover bg-support-module-team flex flex-col justify-end items-center pb-2-0 text-shadow lg:bg-pad-support-module-team lg:h-52-6 xl:bg-pc-support-module-team xl:h-67-5'>
                <div className='px-1-5 text-white text-center'>
                    <div className='text-4-0 font-semibold mb-3-0 lg:text-6-0 lg:leading-5-5 xl:leading-6-6'><span className='text-module-title'>Our </span>Team <br></br>Mission</div>
                    <div className='leading-2-5 text-1-2 lg:leading-1-8 lg:text-1-2'>
                        Our team's mission is to lead <br className='lg:hidden'></br> millions of users into a more  <br className='lg:hidden'></br>secure and dynamic Web3 world. <br></br> Through unremitting efforts and <br className='lg:hidden'></br>technological innovation, we are <br className='lg:hidden'></br> committed to providing <br className='hidden lg:block'></br> users with <br className='lg:hidden'></br> a seamless digital asset <br className='lg:hidden'></br> management experience and  <br className='lg:hidden'></br>opening the door for them  <br className='hidden lg:block'></br>to  <br className='lg:hidden'></br>explore the world of blockchain.
                    </div>
                </div>
            </div>
            <div className='w-full h-54-1 bg-no-repeat  bg-support-module-vision bg-top bg-title-word flex flex-col justify-end items-center lg:h-57-2 lg:bg-pad-support-module-vision'>
                <div className='px-1-8 text-white text-shadow  text-center flex flex-col justify-start items-center'>
                    <div className='text-2-0 leading-4-1  mb-10-0 lg:text-4-0 lg:mb-10-0'>
                        OUR VISION
                    </div>
                    <div className='text-1-2 text-module-title leading-2-0 pb-3-0 '>
                        Our vision is to become a <br className='lg:hidden' /> leading Web3 wallet service<br className='lg:hidden' /> provider,  provide <br className='hidden lg:block'></br> global users <br className='lg:hidden' />with safe, convenient, and<br className='lg:hidden' /> innovative digital asset<br /> management solutions, and <br className='lg:hidden' />promote the widespread <br className='lg:hidden' />application and <br className='hidden lg:block'></br> development of<br className='lg:hidden' /> blockchain technology around <br className='lg:hidden' />the world.
                    </div>
                </div>
            </div>
            <div className='w-full pt-2-9 bg-black xl:pt-8-0'>
                <div className='pl-1-8 lg:pl-5-8 lg:mb-11-8 xl:pl-16-8'>
                    <div className='text-module-title text-4-0 mb-1-0 font-semibold lg:text-6-0'>
                        Version
                    </div>
                    <div className='text-white text-2-5 mb-1-0 lg:text-6-0'>
                        Iteration Record
                    </div>
                </div>
                <div className='w-full pb-2-0 lg:pb-3-4'>
                    <div className='w-full'>
                        {versionInfoItemsList.map((item, index) => {
                            return <div key={index} className='w-full'>
                                <div className='w-full lg:hidden'>
                                    <div className='w-full bg-version-title p-1-5 flex justify-between items-center border-y border-module-title text-module-title mb-1-3'>
                                        <div>
                                            <div className='font-semibold text-1-5 mb-0-4 '>{item.title}</div>
                                            <div className='text-1-0 text-white'>{item.introduction}</div>
                                        </div>
                                        <div onClick={() => handleShowMore(item)} className={`icon iconfont icon-down text-2-0 text-module-title duration-150 transition ease-linear ${item.showMore ? 'rotate-0' : 'rotate-180'}`}></div>
                                    </div>
                                    {item.showMore && <div className='w-full'>
                                        <div className='px-8-0 mb-2-6'>
                                            <img src={item.img}></img>
                                        </div>
                                        <div className='text-white text-1-2 px-1-8 leading-1-9'>
                                            {item.detailItems.map((_item, _index) => {
                                                return <div key={_index} className='mb-2-0 '>{_item}</div>
                                            })}
                                        </div></div>}
                                </div>
                                <div className='hidden lg:block w-full text-white mb-10-0'>
                                    <div className='w-full px-8-7 flex justify-between items-start xl:px-19-8'>
                                        <div className='w-18-7 '>
                                            <img src={item.img} alt=''></img>
                                        </div>
                                        <div className='ml-2-5 flex-1 xl:ml-7-0 xl:w-57-2'>
                                            <div className='text-module-title text-3-0 mb-2-0 font-semibold'>{item.title}</div>
                                            <div className='text-1-5 mb-3-0'>{item.introduction}</div>
                                            <div className='xl:w-57-2'>
                                                {item.detailItems.map((_item, _index) => {
                                                    return <div key={_index} className='text-1-5 mb-2-0'>{_item}</div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportAssets
