import React from 'react'

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
        </div>
    )
}

export default SupportAssets
