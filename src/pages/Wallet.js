import React, { useState } from 'react'
import { currencyItems } from '../utils/dictionary'
const Wallet = () => {
    let [focusSearch, setFocusSearch] = useState(false)
    // let [currencyItemsList, setCurrencyItems] = useState(currencyItems)
    const handleFocus = () => {
        setFocusSearch(true)
    }
    const handleBlur = () => {
        setFocusSearch(false)
    }
    return (
        <div className='pt-4-4 bg-black lg:pt-6-0 lg:pb-6-3 xl:pb-0-1'>
            <div className='w-full flex-col justify-start items-center px-1-2 lg:px-4-0 xl:px-6-4'>
                <div className='rounded-3xl bg-gradient-wallet-explore lg:mt-3-8 xl:mt-auto '>
                    <div className={`transition duration-500 ease-in bg-bottom bg-cover bg-no-repeat bg-wallet-module-explore px-2-7 py-3-3 lg:py-5-0 xl:px-4-2 xl:bg-none xl:bg-right-bottom ${focusSearch ? 'h-38-9 lg:h-32-5 xl:h-39-0' : 'h-35-4 lg:h-30-5'}`}>
                        <div className='bg-clip-text bg-gradient-home-title text-2-2 font-medium text-transparent mb-1-4 lg:text-3-0 xl:text-3-4'>
                            Explore
                        </div>
                        <div className={`transition duration-500 ease-in bg-clip-text bg-gradient-wallet-word leading-1-5 text-1-0 font-light text-transparent  text-shadow lg:text-2-0 lg:leading-3-0 xl:text-2-5 xl:leading-3-4 ${focusSearch ? 'mb-1-5' : 'mb-7-0'}`}>
                            the range of digital assets <br className=''></br> supported by Block Safer.
                        </div>
                        <div className='w-full bg-white rounded-full px-1-3 py-1-0 flex justify-start items-center'>
                            <div className='bg-black flex justify-center items-center text-white w-2-2 h-2-2 mr-1-0 rounded-full'>
                                <div className='icon iconfont icon-search'></div>
                            </div>
                            <div className='flex-1'>
                                <input onFocus={handleFocus} onBlur={handleBlur} className='bg-transparent w-full h-2-2 placeholder:text-black placeholder:font-medium outline-none' placeholder='Search Currency'></input>
                            </div>
                        </div>
                        {focusSearch && <div className='mt-3-2'>
                            <div className='w-full flex justify-between flex-wrap'>
                                {currencyItems.map((item, index) => {
                                    return <div key={index} className='flex flex-col justify-start items-center w-5-5 text-module-title mb-2-0 xl:mb-3-0'>
                                        <div className={`w-3-8 h-3-8 rounded-full flex justify-center items-center bg-currency-items shadow-xl mb-1-0 xl:mb-2-0 xl:w-7-5 xl:h-7-5`}>
                                            <div className={`icon iconfont ${item.icon} text-2-0 xl:text-4-2 `}></div>
                                        </div>
                                        <div className='text-1-0 xl:text-1-2'>{item.title}</div>
                                    </div>
                                })}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
