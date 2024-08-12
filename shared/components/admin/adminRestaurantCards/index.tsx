import Image from 'next/image'
import React from 'react'
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md'

interface AdminRestaurantCardsT {
    key?: string
    onEdit?: (id: any) => void
    handleDeleteModal?: (id: any) => void
}

function AdminRestaurantCards({ key, onEdit, handleDeleteModal }: AdminRestaurantCardsT) {
    return (
        <div key={key} className=' bg-admin-white-color  w-60 h-20 border-2 rounded-md shadow-sm '>
            <div className='flex items-center w-full justify-between'>
                {/* image */}
                <div className='mr-2 mt-3 pl-2 '>
                    <Image width={0} height={0} className='w-16 h-14' src="/burgerKingCard.svg" alt='buregerKing' />
                </div>
                {/* desc */}
                <div className='flex flex-col flex-grow'>
                    <p className='text-lg font-medium text-admin-black'>Burger King</p>
                    <p className='text-sm font-medium text-admin-gray3'>Fast Food</p>
                </div>
                {/* buttons */}
                {/* delete button */}
                <div className='flex flex-col gap-4 pr-2'>
                    <button onClick={handleDeleteModal}>
                        <span>
                            <MdDeleteForever className="fill-admin-delete w-5 h-5    hover:fill-pink-700  hover:scale-95 transition-all duration-500 " />
                        </span>
                    </button>
                    {/*  edit button*/}
                    <button onClick={onEdit}>
                        <span>
                            <MdOutlineEdit className="fill-admin-edit w-5 h-5 hover:fill-green-600  hover:scale-95 transition-all duration-500" />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AdminRestaurantCards