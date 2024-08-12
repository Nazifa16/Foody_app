
import React, { useState } from 'react'
import AdminAddProducttModal from '../../../shared/components/admin/adminAddProduct'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminOrdersTable from '../../../shared/components/admin/adminOrdersTable'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'
import AdminSureUnsureModal from '../../../shared/components/admin/adminSureUnsureModal'


function Orders() {
    const [showProductModal, setShowProductModal] = useState<boolean>(true)
    function showHideModalProduct() {
        setShowProductModal((prev) => !prev)
    }
    // modal delete
    function handleDeleteAlert() {
        AdminSureUnsureModal()
    }
    return (
        <AdminLayout showMod={showHideModalProduct}>
            <div className='w-full'>

                <AdminSecondary secondaryText="History" />
                <AdminAddProducttModal onClose={showHideModalProduct} show={showProductModal} />

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
                            <AdminOrdersTable handleDeleteModal={handleDeleteAlert} />
                            <AdminOrdersTable />
                            <AdminOrdersTable />
                        </tbody>
                    </table>
                </div>

            </div>


        </AdminLayout>
    )
}

export default Orders 