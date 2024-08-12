import React, { useState } from 'react'
import AdminAddProducttModal from '../../../shared/components/admin/adminAddProduct'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminProductCard from '../../../shared/components/admin/adminProductCards'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'
import AdminSureUnsureModal from '../../../shared/components/admin/adminSureUnsureModal'


function AdminProducts() {
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
                <AdminSecondary secondaryText='Products' showDropdown={true} />
                <AdminAddProducttModal onClose={showHideModalProduct} show={showProductModal} />
                <div className='flex gap-10 justify-center  flex-wrap  overflow-scroll max-h-[590px] sm:w-auto m-2  gap-x-7  sm:m-5'>
                    <AdminProductCard handleDeleteModal={handleDeleteAlert} />
                    <AdminProductCard />
                    <AdminProductCard />
                    <AdminProductCard />
                    <AdminProductCard />
                    <AdminProductCard />
                    <AdminProductCard />
                    <AdminProductCard />
                    <AdminProductCard />
                    <AdminProductCard />

                </div>


            </div>


        </AdminLayout>
    )
}

export default AdminProducts