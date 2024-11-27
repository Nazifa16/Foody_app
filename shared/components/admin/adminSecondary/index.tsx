import React from 'react'
import { AdminButton } from '../adminButton'
import AdminDropdown from '../adminDropdown'
import { AddIcon } from '@chakra-ui/icons'
interface AdminSecondaryT {
    secondaryText?: string
    secondaryButtonText?: string
    getData?: (text: string) => void
    showButton?: boolean
    showDropdown?: boolean
    onClick?: () => void
}
function AdminSecondary({ secondaryText, getData, showButton, showDropdown, onClick, secondaryButtonText }: AdminSecondaryT) {
    return (
        <div className='bg-admin-secondary rounded-sm sm:rounded-2xl flex flex-col sm:flex-row justify-between items-center p-5 sm:mt-2 mt-6'>
            <div className='text-admin-text text-xl font-medium'>
                {secondaryText}
            </div>
            <div className='mt-3 sm:mt-0 flex flex-col items-center sm:flex-row gap-1.5 sm:gap-5'>
                {showDropdown &&
                    <AdminDropdown classNameDiv='flex justify-center w-[270px] sm:w-52 gap-3 me-3 sm:me-0'
                        classNameSelect='w-[270px] rounded-sm sm:rounded-2xl  py-2   px-2   bg-admin-input  rounded-2xl font-medium text-base  text-admin-secondary-heading    w-[170px] overflow-x-auto'
                        getData={getData}
                    />
                }
                {showButton &&
                    <AdminButton className='text-white bg-admin-btn text-sm px-4 py-2  rounded-sm  font-bold  sm:rounded-2xl w-[258px] sm:w-full hover:bg-admin-btnhover '
                        onClick={onClick}
                    >
                        <span  >
                            <AddIcon className=" w-2" color="white" />
                        </span>  {`ADD ${secondaryButtonText?.toUpperCase()}`}
                    </AdminButton>

                }

            </div>


        </div>
    )
}

export default AdminSecondary