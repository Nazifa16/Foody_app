import Image from 'next/image'
import React from 'react'
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md'

function AdminProductCard() {
    return (
        <div className=' bg-admin-white-color w-48 max-h-[273px] pb-4 rounded-lg sm:mt-0 mt-4 '>
            {/* image */}
            <div className='flex justify-center'>
                <Image src="/adminMargarita.svg" alt='adminMargarita' width={0} height={0} className='w-40 h-40 object-cover py-2 mt-2 ' />
            </div>
            {/* desc */}
            <div className=' flex flex-col align-center m-1 mx-5 mb-4'>
                <p className='text-lg font-medium'>Margarita</p>
                <p className='font-medium text-sm text-admin-gray3'>Papa John's</p>
            </div>
            {/*  */}
            <div className='flex justify-between mx-5'>
                <p className='text-admin-edit font-medium text-xs mt-2'>$16</p>
                {/* buttons */}
                <div className='flex justify-center gap-2 '>
                    <button>
                        <span>
                            <MdOutlineEdit className="fill-admin-edit w-6 h-6 hover:fill-green-600  hover:scale-95 transition-all duration-500" />
                        </span>
                    </button>
                    <button>
                        <span>
                            <MdDeleteForever className="fill-admin-delete w-6 h-6    hover:fill-pink-700  hover:scale-95 transition-all duration-500 " />

                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminProductCard