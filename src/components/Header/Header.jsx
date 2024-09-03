import React from 'react'

function Header() {
    return (
        <div>
            <section className='w-11/12 mx-auto grid grid-cols-1 justify-items-center gap-2 px-3 md:grid-cols-2'>
                {/* div one  */}
                <div className='space-y-5 md:pt-20'>
                    <h1 className='font-semibold mt-5 text-3xl lg:text-5xl'>Play Like The</h1>
                    <h1 className=' bg-gradient-to-t from-[#F948B2] to-[#8758F1] text-transparent bg-clip-text text-4xl md:text-6xl lg:text-8xl font-extrabold'>G.O.A.T.</h1>

                    <div className='flex gap-2 text-xl'>
                        <i class="ri-play-circle-fill"></i>
                        <p>1-Click instant play</p>
                    </div>

                    <div className='flex gap-2 text-xl'>
                        <i class="ri-download-2-line"></i>
                        <p> No Download</p>
                    </div>

                    <div className='flex gap-2 text-xl'>
                        <i class="ri-group-fill"></i>
                        <p>1000s of supported online games</p>
                    </div>


                    <div className='space-x-4'>
                        <button className=' p-3 rounded-full px-6 font-bold bg-gray-300 text-black hover:bg-[#FF42A5] hover:text-white duration-300  ease-in-out'>SIGN IN</button>
                        <button className=' p-3 rounded-full px-6 font-bold bg-[#4EC5F7] text-white'>GO ROUGE</button>
                    </div>

                </div>


                {/* div two  */}
                <div className=''>


                    <img className='' src="./Group 18.png" alt="" />


                </div>


            </section>
        </div>
    )
}

export default Header