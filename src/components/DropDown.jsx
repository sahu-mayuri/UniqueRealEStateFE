import React from 'react'

export default function DropDown() {
    const homeList = ['Home Style 01', 'Home Style 02', 'Home Style 03', 'Home Style 04', 'Home Style 05', 'Home Style 06'];
    return (
        <div>
            <div className="group relative cursor-pointer py-2">
                <div className='flex flex-row items-center'>
                    <a className="menu-hover my-2 py-2 text-lg font-bold font-bodyfont text-white">
                        Home
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                        </svg></span>
                </div>
                <div className="invisible absolute z-50 border-t-4 border-color-orange flex w-auto text-nowrap flex-col bg-gray-100 py-1 px-8 text-gray-800 shadow-xl group-hover:visible">
                    {homeList.map((list) =>
                        <a className="my-2 block border-b  py-1 font-bodyfont text-lg text-gray-500 hover:text-color-orange md:mx-2">
                            {list}
                        </a>
                    )
                    }
                </div>
            </div>
        </div>

    )
}
