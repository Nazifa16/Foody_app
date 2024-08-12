import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminAddProducttModal from '../../../shared/components/admin/adminAddProduct'
import AdminAddRestaurantModal from '../../../shared/components/admin/adminAddRestaurantModal'
import AdminLayout from '../../../shared/components/admin/AdminLayout'
import AdminRestaurantCards from '../../../shared/components/admin/adminRestaurantCards'
import AdminSecondary from '../../../shared/components/admin/adminSecondary'
import AdminSureUnsureModal from '../../../shared/components/admin/adminSureUnsureModal'


function AdminRestaurants() {



    const [showProductModal, setShowProductModal] = useState<boolean>(true)
    function showHideModalProduct() {
        setShowProductModal((prev) => !prev)
    }
    const [showRestaurantModal, setshowRestaurantModal] = useState<boolean>(true)
    function showHideModalRestaurant() {
        setshowRestaurantModal((prev) => !prev)
    }

    // modal delete
    function handleDeleteAlert() {
        AdminSureUnsureModal()
    }
    return (
        <AdminLayout showMod={showHideModalProduct}>
            <div className='w-full'>

                <AdminSecondary showButton={true} secondaryButtonText="restaurant" secondaryText="Resrtaurants" showDropdown={true} onClick={showHideModalRestaurant} />
                <AdminAddProducttModal onClose={showHideModalProduct} show={showProductModal} />
                <AdminAddRestaurantModal onClose={showHideModalRestaurant} show={showRestaurantModal} />



                <div className='flex flex-wrap justify-center overflow-scroll max-h-[390px] sm:w-auto m-2  gap-x-7 gap-10 sm:m-5 '>
                    <AdminRestaurantCards handleDeleteModal={handleDeleteAlert} />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                    <AdminRestaurantCards />
                </div>
                {/* <AdminSureUnsureModal /> */}

            </div>


        </AdminLayout>
    )
}

export default AdminRestaurants