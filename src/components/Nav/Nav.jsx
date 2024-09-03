import React from 'react'

function Nav() {
    return (
        <div>
            <nav className='flex justify-between px-5 xl:px-20 shadow-xl py-2'>
                <div className='flex items-center  gap-3'>
                    <div>
                        <img className='h-[30px]' src="./Frame.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold' > <span className='text-[#FF42A5FF]'>G</span>amer</h1>
                    </div>
                </div>

                <div className='space-x-5 hidden md:block'>
                    <a href="#">About Us</a>
                    <a href="#">Developers</a>
                    <button className='btn '>Follow Us on</button>

                </div>

                <div className='flex items-center justify-center text-xl md:hidden'>
                    <i class="ri-bar-chart-horizontal-line"></i>
                </div>




            </nav>
        </div>
    )
}

export default Nav;