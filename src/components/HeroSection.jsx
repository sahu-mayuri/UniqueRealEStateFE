import React from 'react'
import Header from './Header'
import HeaderOne from './HeaderOne'
import PropertySearchBox from './PropertySearchBox'

export default function HeroSection() {
  return (
    <div>
                <div className='w-full h-[1000px] lg:h-[800px] divide-slate-300 bg-[url("/public/images/11.jpg")] bg-cover bg-no-repeat bg-center relative z-10 '>
                    
                      <div className=' absolute w-full h-[1000px] lg:h-[800px] bg-black opacity-50 bg-blend-overlay'></div>
                    <HeaderOne/>
                    <div className='w-full h-0.5 bg-gray-300'></div>
                    <Header/>
                    <div className='z-0'>
                    <div className="group relative cursor-pointer">
                <PropertySearchBox/>
                </div>
                </div>
                </div>
                
    </div>
  )
}
