import React, { useState } from 'react'

const Wallet = () => {
    let [focusSearch, setFocusSearch] = useState(false)
    const handleFocus = () => {
        setFocusSearch(true)
    }
    const handleBlur = () => {
        setFocusSearch(false)
    }
    return (
        <div className='pt-4-4 bg-black lg:pt-6-0'>
            <div className='w-full flex-col justify-start items-center px-1-2'>
                <div className='rounded-3xl bg-gradient-wallet-explore'>
                    <div className={`transition duration-500 ease-in bg-bottom bg-cover bg-no-repeat bg-wallet-module-explore px-2-7 py-3-3 ${focusSearch ? 'h-51-9' : 'h-35-4'}`}>
                        <div className='bg-clip-text bg-gradient-home-title text-2-2 font-medium text-transparent mb-1-4 '>
                            Explore
                        </div>
                        <div className={`transition duration-500 ease-in bg-clip-text bg-gradient-wallet-word leading-1-5 text-1-0 font-light text-transparent  text-shadow ${focusSearch ? 'mb-1-5' : 'mb-7-0'}`}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
