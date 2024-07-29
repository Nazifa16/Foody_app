import React, { useState } from 'react'
import AdminAddProducttModal from '../../../shared/components/admin/adminAddProduct'
import AdminAddRestaurantModal from '../../../shared/components/admin/adminAddRestaurantModal'
import AdminAddUpdateModal from '../../../shared/components/admin/adminAddRestaurantModal'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'

function AdminRestaurants() {
    const [showProductModal, setShowProductModal] = useState<boolean>(true)
    function showHideModalProduct() {
        setShowProductModal((prev) => !prev)
    }
    const [showRestaurantModal, setshowRestaurantModal] = useState<boolean>(true)
    function showHideModalRestaurant() {
        setshowRestaurantModal((prev) => !prev)
    }
    return (
        <AdminLayout showMod={showHideModalProduct}>
            <div className='w-full'>
                <AdminSecondary showButton={true} secondaryButtonText="restaurant" secondaryText="Resrtaurants" showDropdown={true} onClick={showHideModalRestaurant} />
                <AdminAddProducttModal onClose={showHideModalProduct} show={showProductModal} />
                <AdminAddRestaurantModal onClose={showHideModalRestaurant} show={showRestaurantModal} />

            </div>

        </AdminLayout>
    )
}

export default AdminRestaurants