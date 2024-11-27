import React, { useState } from 'react'
import AdminAddCategoryModal from '../../../shared/components/admin/adminAddCategoryModal'
import AdminAddProducttModal from '../../../shared/components/admin/adminAddProduct'

import AdminCategoryTable from '../../../shared/components/admin/adminCategoryTable'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'
import AdminSureUnsureModal from '../../../shared/components/admin/adminSureUnsureModal'
function AdminCategories() {


    const [showProductModal, setShowProductModal] = useState<boolean>(true)
    function showHideModalProduct() {
        setShowProductModal((prev) => !prev)
    }

    const [showCategoryModal, setShowCategoryModal] = useState<boolean>(true)
    function showHideModalCategory() {
        setShowCategoryModal((prev) => !prev)
    }


    // ALERT SWEET
    function handleDeleteAlert() {
        AdminSureUnsureModal()
    }
    return (
        <AdminLayout showMod={showHideModalProduct}>
            <div className='w-full'>

                <AdminSecondary showButton={true} secondaryButtonText=" Category" secondaryText="Categories" showDropdown={true} onClick={showHideModalCategory} />
                <AdminAddProducttModal onClose={showHideModalProduct} show={showProductModal} />
                <AdminAddCategoryModal onClose={showHideModalCategory} show={showCategoryModal} />

                <div className="  w-full mt-10 bg-white sm:overflow-visible overflow-auto">
                    <table className="w-full table-auto sm:min-w-0 min-w-[600px]">
                        <thead className="h-16 text-sm">
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <AdminCategoryTable handleDelete={handleDeleteAlert} />
                            <AdminCategoryTable />
                            <AdminCategoryTable />
                        </tbody>
                    </table>
                </div>

            </div>


        </AdminLayout>
    )

}

export default AdminCategories