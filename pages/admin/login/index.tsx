
import Image from 'next/image'
import React from 'react'
import { useToast } from '@chakra-ui/react'



const AdminLogin = () => {



    return (
        <>
            <div className='min-h-screen  bg-admin-bg'>
                <nav className='pt-14 mb-20  pl-8 md:mb-44' >
                    <Image width={102} height={22} src="/adminFoody.svg" alt='foodyLogo' />
                </nav>
                <div className='flex justify-center'>
                    <div className=' flex flex-col-reverse md:flex-row'>
                        {/* login side */}
                        <div className=' w-full sm:w-full  md:bg-admin-main py-14  px-6 sm:px-7 md:px-12 max-w-md '>
                            <h1 className='text-4xl font-bold  text-center  mb-10 text-admin-text'>Welcome Admin</h1>
                            <div className=' w-full  flex flex-col  gap-6  '>
                                <input type='text' className=' bg-admin-input text-admin-text rounded  py-4 pl-10  text-lg font-medium ' placeholder='Username' />
                                <input className='mb-3  bg-admin-input text-admin-text rounded   py-4 pl-10  text-lg font-medium ' type='password' placeholder='Password' />
                                <button className='w-full bg-admin-btn text-white  text-2xl  font-medium rounded  py-3  cursor-pointer hover:bg-admin-btn-hover'>sign in</button>
                            </div>
                        </div >
                        {/* picture side */}
                        <div className=' flex  justify-center md:bg-white  px-7 w-full' >
                            <Image src="/adminLoginBg.svg" alt="login" width={0} height={0} className='w-full' />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default AdminLogin