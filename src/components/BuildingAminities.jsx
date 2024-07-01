import React from 'react'

export default function BuildingAminities() {
  return (
        <div className='w-full flex flex-col justify-center items-center bg-slate-100'>
        <h1 className='text-orange-600 bg-orange-100 rounded-full px-5 py-1 font-bold'>Our Animities</h1>
        <h1 className='text-black/90 font-extrabold text-5xl p-5'>Building Animities</h1>
    <div className='flex flex-wrap justify-center bg-slate-100 gap-3'>
      <div
        className="w-80 gap-2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        
          <div
            className="w-full bg-cover bg-no-repeat flex flex-row justify-center">
            <img
              className="rounded-t-lg "
              src="https://quarter-nextjs.vercel.app/img/icons/icon-img/21.png"
              alt="" />
            
          </div>
        
        <div className="p-6 text-center">
          <h1
            className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            Parking Space
          </h1>
          <div className='border-t-2'>
            <button
              type="button"
              className="inline-block rounded px-6 pb-2 pt-2.5 text-sm font-bold uppercase leading-normal text-orange-500 hover:text-orange-900">
              Find A Home
            </button>
            </div>
        </div>
      </div>
   
    </div>
    </div>
  )
}
