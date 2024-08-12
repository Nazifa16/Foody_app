
import React from 'react'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminOrdersHistoryTable from '../../../shared/components/admin/adminOrdersHistoryTable'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'



function Orders() {
    return (
        <AdminLayout >
            <div className='w-full'>

                <AdminSecondary />

                <div className="  w-full mt-10 bg-white sm:overflow-visible overflow-auto">
                    <table className="w-full table-auto sm:min-w-0 min-w-[600px]">
                        <thead className="h-16 text-sm">
                            <tr>
                                <th>ID</th>
                                <th>Customer ID</th>
                                <th>Time</th>
                                <th>Delivery Address</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Contact</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <AdminOrdersHistoryTable />
                            <AdminOrdersHistoryTable />
                            <AdminOrdersHistoryTable />
                        </tbody>
                    </table>
                </div>

            </div>


        </AdminLayout>
    )
}

export default Orders 