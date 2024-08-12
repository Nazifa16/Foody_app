import React, { useState } from 'react'
import AdminAddProducttModal from '../../../shared/components/admin/adminAddProduct'
import AdminCategoryTable from '../../../shared/components/admin/adminCategoryTable'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminOfferTable from '../../../shared/components/admin/adminOfferTable'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'
import AdminSureUnsureModal from '../../../shared/components/admin/adminSureUnsureModal'

function AdminOffers() {
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

                <AdminSecondary showButton={true} secondaryButtonText="offer" secondaryText="Offers" />
                <AdminAddProducttModal onClose={showHideModalProduct} show={showProductModal} />

                <div className="  w-full mt-10 bg-white sm:overflow-visible overflow-auto">
                    <table className="w-full table-auto sm:min-w-0 min-w-[600px]">
                        <thead className="h-16 text-sm">
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <AdminOfferTable handleDeleteModal={handleDeleteAlert} />
                            <AdminOfferTable />
                            <AdminOfferTable />
                        </tbody>
                    </table>
                </div>

            </div>


        </AdminLayout>
    )

}

export default AdminOffers