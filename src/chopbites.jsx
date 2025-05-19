import tuwo from './img/tuwo.jpg'
import ramen from './img/ramen.jpg'
import friedrice from './img/friedrice.png'
import { useState } from 'react';



function Chop() {

const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className='text-gray-500 grid md:grid-cols-5'> {/* content wrapper */}
        


            <div className="md:col-span-1 md:flex md:justify-end mt-5"> {/* nav start */}
                
                <nav className='text-right'>
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className=' font-bold uppercase px-16 border-b border-gray-100'>
                            <a href="" className='hover:text-gray-900'>
                                Chop Bites
                            </a>
                        </h1>
                        <div className='px-4 cursor-pointer md:hidden' id='dropdown' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className='size-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                    </div>
            
                    <ul  className={`mt-6 bg-white rounded-lg shadow-lg px-4 py-2 transition-all duration-300 ease-in-out transform origin-top ${
    isMenuOpen ? 'scale-y-100 opacity-100 block' : 'scale-y-0 opacity-0 hidden'
  } md:bg-transparent md:shadow-none md:px-0 md:py-0 md:block`}>
                        <li className='text-gray-700 font-bold py-1 hover:bg-gray-100 rounded-md transition-colors duration-200'>
                            <a href="" className='flex px-4 justify-end border-r-4 border-gray-700'>
                                <span>Home</span>
                                <svg className='w-5 size-6 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                            </a>
                        </li>
                        <li className='py-1 hover:bg-gray-100 rounded-md transition-colors duration-200'>
                            <a href="" className='flex px-4 justify-end border-r-4 border-white'>
                                <span>About</span>
                                <svg className='w-5 size-6 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>

                            </a>
                        </li>
                        <li className='py-1 hover:bg-gray-300 rounded-md transition-colors duration-200'>
                            <a href="" className='flex px-4 justify-end border-r-4 border-white'>
                                <span>Contact</span>
                                <svg className='w-5 size-6 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>

                            </a>
                        </li>
                        {/* <li>
                        <a href="" className='flex px-4 justify-end'>
                            <span>Start Your Order</span>
                        </a>
                    </li> */}
                    </ul>
                </nav>
            </div>{/* nav end */}

            <main className='px-16 py-6 bg-gray-100 md:col-span-4'>
                <div className='flex justify-center md:justify-end'>
                    <a href="" className='btn text-gray-700 border md:border-gray-700 hover:bg-gray-300 transition ease-out duration-500 '>Log in</a>
                    <a href="" className='btn text-gray-700 border md:border-gray-700 hover:bg-gray-300 transition ease-out duration-500 ml-2'>Sign up</a>
                </div>

                <header>
                    <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
                    <h3 className='text-2xl font-semibold'>For Customers</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest recipes</h4>
                    <div className='mt-8 grid lg:grid-cols-3 gap-10'>
                        {/*cards go here*/}
                        <div className='card hover:shadow-lg'>
                            <img src={tuwo} alt="" className='w-full h-32 sm:h-60 object-cover' />
                            <div className='m-4'>
                                <span className='font-bold'>Tuwo with egusi soup and ganda</span>
                                <span className='block text-gray-500 text-sm'>Recipe By Sanji</span>
                            </div>
                            <div className='badge'>
                                <svg className='w-5 size-6 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <span>40 min</span>
                            </div>
                        </div>

                        <div className='card hover:shadow-lg'>
                            <img src={ramen} alt="" className='w-full h-32 sm:h-60 object-cover' />
                            <div className='m-4'>
                                <span className='font-bold'>Ichiraku ramen</span>
                                <span className='block text-gray-500 text-sm'>Recipe By Sanji</span>
                            </div>
                            <div className='badge'>
                                <svg className='w-5 size-6 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span>15 min</span>
                            </div>
                        </div>

                        <div className='card hover:shadow-lg'>
                            <img src={friedrice} alt="" className='w-full h-32 sm:h-60 object-cover' />
                            <div className='m-4'>
                                <span className='font-bold'>Fried rice with chicken</span>
                                <span className='block text-gray-500 text-sm'>Recipe By Sanji</span>
                            </div>
                            <div className='badge'>
                                <svg className='w-5 size-6 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span>1hr 20 min</span>
                            </div>
                        </div>

                    </div>

                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

                    <div className='mt-8'>
                        {/*card go here*/}
                    </div>

                    <div className='flex justify-center'>
                        <div className='btn bg-gray-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>Load more</div>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default Chop