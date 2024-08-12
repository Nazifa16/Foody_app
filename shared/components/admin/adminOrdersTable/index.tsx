import React from 'react';
import { MdDeleteForever, MdOutlineRemoveRedEye } from 'react-icons/md';
interface AdminOrdersTableT {
    handleDeleteModal?: () => void
}
function AdminOrdersTable({ handleDeleteModal }: AdminOrdersTableT) {
    return (
        <>
            <tr className='border-y border-admin-table-border text-sm leading-6 text-center font-normal'>
                <td className='text-center px-2 py-2 ' >
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
                    <div className='whitespace-nowrap text-center'>
                        25 Dec 2024
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap text-center'>
                        25 Eve Street, Baku
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap text-center'>
                        $2456
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap text-center'>
                        Cash on Delivery
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='whitespace-nowrap text-center'>
                        +99455566788
                    </div>
                </td>
                <td className='px-2 py-2'>
                    <div className='flex justify-center gap-3'>
                        <button>
                            <MdOutlineRemoveRedEye className="w-6 h-6" />
                        </button>
                        <button onClick={handleDeleteModal}>
                            <MdDeleteForever className="fill-admin-delete w-6 h-6 hover:fill-red" />
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default AdminOrdersTable;
