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
            <div className='w-full bg-no-repeat bg-bottom  bg-support-module-info h-60-1 mt-1-5'>
                <div className='w-full px-3-1'>
                    {infoItems.map((item, index) => {
                        return <div key={index} className='mb-2-0'>
                            <div className='text-module-title text-1-5  mb-1-0'>{item.title}</div>
                            <div className='text-white tex-1-0'>{item.content}</div>
                        </div>
                    })}
                </div>
                <div className='w-full px-1-9'>
                    {advantageItems.map((item, index) => {
                        return <div key={index} className='h-6-3 w-full rounded-3xl bg-primary-yellow10 flex justify-start items-center pl-2-7 mb-1-0 backdrop-blur-xl'>
                            <div className='w-4-4'>
                                <img src={item.img} alt=''></img>
                            </div>
                            <div className='text-primary-yellow ml-2-0 text-1-5'>{item.title}</div>
                        </div>
                    })}
                </div>
            </div>
            <div className='w-full h-64-0 bg-no-repeat bg-support-module-team flex flex-col justify-end items-center pb-2-0 text-shadow'>
                <div className='px-1-5 text-white text-center'>
                    <div className='text-4-0 font-semibold mb-3-0'><span className='text-module-title'>Our </span>Team <br></br>Mission</div>
                    <div className='leading-2-5 text-1-2'>
                        Our team's mission is to lead <br></br> millions of users into a more  <br></br>secure and dynamic Web3 world. <br></br> Through unremitting efforts and <br></br>technological innovation, we are <br></br> committed to providing users with <br></br> a seamless digital asset <br></br> management experience and  <br></br>opening the door for them to  <br></br>explore the world of blockchain.
                    </div>
                </div>
            </div>
            <div className='w-full h-54-1 bg-no-repeat bg-support-module-vision bg-top bg-title-word flex flex-col justify-end items-center '>
                <div className='px-1-8 text-white text-shadow  text-center flex flex-col justify-start items-center'>
                    <div className='text-2-0 leading-4-1  mb-10-0'>
                        OUR VISION
                    </div>
                    <div className='text-1-2 text-module-title leading-2-0 pb-3-0'>
                        Our vision is to become a <br /> leading Web3 wallet service<br /> provider, provide global users <br />with safe, convenient, and<br /> innovative digital asset<br /> management solutions, and <br />promote the widespread <br />application and development of<br /> blockchain technology around <br />the world.
                    </div>
                </div>
            </div>
            <div className='w-full pt-2-9 bg-black'>
                <div className='pl-1-8'>
                    <div className='text-module-title text-4-0 mb-1-0 font-semibold'>
                        Version
                    </div>
                    <div className='text-white text-2-5 mb-1-0'>
                        Iteration Record
                    </div>
                </div>
                <div className='w-full pb-2-0'>
                    <div className='w-full'>
                        {versionInfoItemsList.map((item, index) => {
                            return <div key={index} className='w-full'>
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
                                            return <div className='mb-2-0 '>{_item}</div>
                                        })}
                                    </div></div>}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportAssets
