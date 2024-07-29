import React, { useState } from 'react'
import AdminAddProducttModal from '../../../shared/components/admin/adminAddProduct'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'

function AdminProducts() {
    const [showProductModal, setShowProductModal] = useState<boolean>(true)
    function showHideModalProduct() {
        setShowProductModal((prev) => !prev)
    }
    return (
        <AdminLayout showMod={showHideModalProduct}>
            <div className='w-full'>
                <AdminSecondary secondaryText='Products' showDropdown={true} />
                <AdminAddProducttModal onClose={showHideModalProduct} show={showProductModal} />

            </div>

        </AdminLayout>
    )
}

export default AdminProducts