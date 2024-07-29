import Image from 'next/image'
import React from 'react'
import Languages from '../../common/languages'
import { AdminButton } from '../adminButton'

interface props {
    onClick?: () => void
}
const AdminHeader = ({ onClick }: props) => {
    return (
        <nav className='flex justify-between  items-center rounded-md px-5  py-11 sm:m-0 sm:mb-4 bg-admin-secondary sm:p-5 '>
            <div className='flex items-center gap-2'>
                <button className='sm:hidden block mr-1'>
                    <Image src="/adminHamburger.svg" alt='adminHamburger' width={0} height={0} className='w-8 h-6' />
                </button>
                <Image src="/adminFoody.svg" alt='adminFoody' width={0} height={0} className='w-24 h-7' />
            </div>

            <div className='flex gap-3 sm:gap-4'>
                <AdminButton className='flex justify-center sm:` bg-admin-btn text-white text-sm font-medium px-3  py-2 rounded-full shadow-sm shadow-admin-btn-shadow hover:bg-admin-btnhover' text=' + ' children={<span className="hidden  md:inline-block"> add product </span>} onClick={onClick} />
                <Languages />
                <button className=' cursor-pointer hidden sm:inline-block'>
                    <Image src="/adminUser.svg" width={0} height={0} alt='adminUser' className='w-12 h-10 rounded-full ' />
                </button>
            </div>
        </nav>
    )
}

export default AdminHeader