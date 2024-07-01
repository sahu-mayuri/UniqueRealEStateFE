import { Input } from 'postcss';
import React, {useState} from 'react'
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
    TERipple,
    TEInput,
} from "tw-elements-react";
export default function PropertySearchBox() {
    const [range,setRange]=useState(5)
    return (
        <div>
        <div className='w-full h-full md:h-[560px] flex justify-center items-center'>
            <div className='w-full flex flex-col xs:px-5 xs:py-8 md:px-24'>
                <div className='flex flex-row'>
                    <button className='bg-orange-600 text-nowrap px-2 lg:px-6 pb-2 lg:h-16 pt-2.5 m-1 text-xs md:text-lg font-medium uppercase text-white'>
                        <div className='flex flex-row items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 me-1">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            Rent Home
                        </div></button>
                    <button className='bg-orange-600 text-nowrap px-2 lg:px-6 pb-2 lg:h-16 pt-2.5 m-1 text-xs md:text-lg font-medium uppercase text-white'>
                        <div className='flex flex-row items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 me-1">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            Sale Home
                        </div>
                    </button>
                </div>
            
            <div className='w-full m-1 py-4 lg:py-6 flex justify-center items-center bg-slate-200'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2'>
                <div className='col-span-1 m-1'>
                    <TEDropdown className="flex justify-center w-full">
                                            <TERipple rippleColor="light">
                                                <TEDropdownToggle className="w-60 lg:w-80 m-2 flex items-center justify-start whitespace-nowrap border border-slate-400 bg-white px-6 py-4 text-md font-medium leading-normal text-black transition duration-150 ease-in-out hover:bg-slate-100" o>
                                                    <div className='flex flex-row w-full'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 me-1">
                                                            <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                                        </svg>
                                                        Property Type
                                                    </div>
                                                    <span>
                                                        <svg className='h-4 w-4 me-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </TEDropdownToggle>
                                            </TERipple>

                                            <TEDropdownMenu>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Action
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Another action
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Something else here
                                                    </a>
                                                </TEDropdownItem>
                                            </TEDropdownMenu>
                                        </TEDropdown>
                    </div>
                    <div className='col-span-1 m-1'>
                    <TEDropdown className="flex justify-center w-full">
                                            <TERipple rippleColor="light">
                                                <TEDropdownToggle className="w-60 lg:w-80 m-2 flex items-center justify-start whitespace-nowrap border border-slate-400 bg-white px-6 py-4 text-md font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-slate-100">
                                                    <div className='flex flex-row w-full'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 me-1">
                                                            <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                                        </svg>
                                                        Location
                                                    </div>
                                                    <span>
                                                        <svg className='h-4 w-4 me-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </TEDropdownToggle>
                                            </TERipple>

                                            <TEDropdownMenu>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Action
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Another action
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Something else here
                                                    </a>
                                                </TEDropdownItem>
                                            </TEDropdownMenu>
                                        </TEDropdown>
                    </div>
                    <div className='col-span-1 m-1'>
                    <TEDropdown className="flex justify-center w-full">
                                            <TERipple rippleColor="light">
                                                <TEDropdownToggle className="w-60 lg:w-80 m-2 flex items-center justify-start whitespace-nowrap border border-slate-400 bg-white px-6 py-4 text-md font-medium leading-normal text-black transition duration-150 ease-in-out hover:bg-slate-100">
                                                    <div className='flex flex-row w-full'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 me-1">
                                                            <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                                        </svg>
                                                        Sub Location
                                                    </div>
                                                    <span>
                                                        <svg className='h-4 w-4 me-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </TEDropdownToggle>
                                            </TERipple>

                                            <TEDropdownMenu>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Action
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Another action
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        Something else here
                                                    </a>
                                                </TEDropdownItem>
                                            </TEDropdownMenu>
                                        </TEDropdown>
                    </div>
                    <div className='col-span-1 m-1'>
                    <TEDropdown className="flex justify-center w-full">
                                            <TERipple rippleColor="light">
                                                <TEDropdownToggle className="w-60 lg:w-80 m-2 flex items-center justify-start whitespace-nowrap border border-slate-400 bg-white px-6 py-4 text-md font-medium leading-normal text-black transition duration-150 ease-in-out hover:bg-slate-100">
                                                    <div className='flex flex-row w-full'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 me-1">
                                                            <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                                        </svg>
                                                        Bedrooms
                                                    </div>
                                                    <span>
                                                        <svg className='h-4 w-4 me-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </TEDropdownToggle>
                                            </TERipple>

                                            <TEDropdownMenu>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        1
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        2
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        3
                                                    </a>
                                                </TEDropdownItem>
                                                <TEDropdownItem>
                                                    <a href="#" className="block w-60 min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                        4
                                                    </a>
                                                </TEDropdownItem>
                                            </TEDropdownMenu>
                                        </TEDropdown>
                    </div>
                    <div className='col-span-1 m-1'>
                        <input className='w-60 lg:w-80 m-2 flex items-center justify-start outline-none focus:outline-orange-400 focus:outline-1 bg-white px-6 py-4 text-md font-medium leading-normal text-black transition duration-150 ease-in-out hover:bg-slate-100' placeholder='Min Size (in sqft)'></input>
                    </div>
                    <div className='col-span-1 m-1'>
                        <input className='w-60 lg:w-80 m-2 items-center justify-start outline-none focus:outline-orange-400 focus:outline-1 bg-white px-6 py-4 text-md font-medium leading-normal text-black transition duration-150 ease-in-out hover:bg-slate-100' placeholder='Max Size (in sqft)'></input>
                    </div>
                    <div className='col-span-1 md:col-span-2 lg:col-span-3 lg:px-5'>
                                        <label
                                            className="mb-2 inline-block font-semibold text-neutral-500 dark:text-neutral-200"
                                        >
                                            Your range : 5 to {range}
                                        </label>
                                        <input
                                            type="range"
                                            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-orange-500"
                                            min="0"
                                            max="100"
                                            step="1"
                                            id="customRange3"
                                            value={range}
                                            onChange={(e)=>setRange(e.target.value)}
                                        />
                                    </div>
                    <div className='col-span-1 md:col-span-2 lg:col-span-3 '>
                    <div className='flex flex-row justify-center items-center'>
                                    <button className='bg-orange-600 text-nowrap px-2 lg:px-6 pb-2 lg:h-16 pt-2.5 m-1 text-xs md:text-lg font-medium uppercase text-white'>
                        
                            Search Inventory
                        
                    </button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
