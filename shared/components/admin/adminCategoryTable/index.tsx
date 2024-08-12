// import Image from 'next/image'
// import React from 'react'
// import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md'

// function AdminCategoryTable() {
//     return (
//         <>
//             <tr className='  border-y border-admin-table-border text-sm leading-6 text-center  font-normal '>
//                 <td className='text-center max-w-[75px]   overflow-x-auto'>
//                     <div className='flex  justify-center '>
//                         <p className='border rounded-lg px-2 '>9177</p>
//                     </div>
//                 </td>

//                 <td className='flex justify-center items-center  h-12'>
//                     <Image width={0} height={0} src='/pizzaTable.svg' alt='pizzaTable' className='w-16 h-10' />
//                 </td>

//                 <td className='max-w-56 text-center'>
//                     <div className='max-w-20 whitespace-nowrap overflow-x-scroll text-center'>
//                         pizza yummy yummy
//                     </div>
//                 </td>

//                 <td className='max-w-56 '>
//                     <div className=' max-w-20 whitespace-nowrap overflow-x-scroll  flex justify-center items-center '>
//                         yummy-pizza
//                     </div>
//                 </td>

//                 <td>
//                     <div className='flex justify-center   gap-3 mx-3'>
//                         <button>
//                             <MdOutlineEdit className="fill-admin-edit w-6 h-6 hover:fill-green-600  hover:scale-95 transition-all duration-500" />
//                         </button>
//                         <button>
//                             <MdDeleteForever className="fill-admin-delete w-6 h-6 hover:fill-red" />
//                         </button>

//                     </div>
//                 </td>


//             </tr>

//         </>
//     )
// }

// export default AdminCategoryTable

import Image from 'next/image'
import React from 'react'
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md'

interface AdminCategoryTableT {
    handleDelete?: () => void;
}

function AdminCategoryTable({ handleDelete }: AdminCategoryTableT) {
    return (
        <tr className='border-y border-admin-table-border text-sm leading-6 text-center font-normal'>
            <td className='text-center px-2'>
                <div className='flex justify-center'>
                    <p className='border rounded-lg px-2'>9177</p>
                </div>
            </td>
            <td className='flex justify-center items-center h-12'>
                <Image width={64} height={40} src='/pizzaTable.svg' alt='pizzaTable' className='w-16 h-10' />
            </td>
            <td className='px-2'>
                <div className='whitespace-nowrap overflow-x-scroll text-center max-w-30'>
                    pizza yummy yumm
                </div>
            </td>
            <td className='px-2'>
                <div className='whitespace-nowrap overflow-x-scroll text-center'>
                    yummy-pizza
                </div>
            </td>
            <td className='px-2'>
                <div className='flex justify-center gap-3 mx-3'>
                    <button>
                        <MdOutlineEdit className="fill-admin-edit w-6 h-6 hover:fill-green-600 hover:scale-95 transition-all duration-500" />
                    </button>
                    <button onClick={handleDelete}>
                        <MdDeleteForever className="fill-admin-delete w-6 h-6 hover:fill-red" />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default AdminCategoryTable
