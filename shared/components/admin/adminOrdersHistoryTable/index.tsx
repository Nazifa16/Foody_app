import Image from 'next/image'
import React from 'react'
import { MdDeleteForever, MdOutlineRemoveRedEye } from 'react-icons/md'


function AdminOrdersHistoryTable() {
    return (
        <>
            <tr className='border-y border-admin-table-border text-sm leading-6 text-center font-normal'>
                <td className='text-center px-2 py-2'>
                    <div className='flex justify-center'>
                        <p className='border rounded-lg px-2'>9178</p>
                    </div>
                </td>
                <td className='text-center px-2 py-2'>
                    <div className='flex justify-center'>
                        <p className='border rounded-lg px-2'>917799</p>
                    </div>
                </td>

                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap overflow-x-scroll text-center max-w-30'>
                        25 dec 2024
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap overflow-x-scroll text-center max-w-30'>
                        25 eve street baku
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap overflow-x-scroll text-center'>
                        $2456
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap overflow-x-scroll text-center'>
                        cash on devilivery
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap overflow-x-scroll text-center'>
                        99455566788
                    </div>
                </td>

            </tr>
        </>
    )
}

export default AdminOrdersHistoryTable