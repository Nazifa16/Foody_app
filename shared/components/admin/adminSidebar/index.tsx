import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react';


interface adminSidebarT {
    open?: boolean;
    onClose?: () => void;
}

function AdminSidebar({ open, onClose }: adminSidebarT) {
    const { push, pathname } = useRouter()
    // const [state, setState] = useState<boolean>(true)

    // function handleclose() {
    //     setState(prev => !prev)
    // }

    const activeStyles = (p: string) => {
        if (pathname === p) {
            return "bg-white rounded bg-opacity-10"
        }
        return ""
    }

    if (!open) return null;
    return (
        // state && (
        <div className="fixed inset-0 z-50 flex  bg-opacity-50 sm:bg-transparent sm:relative sm:inset-auto">
            <div className="bg-admin-sidebar w-9/12 h-full sm:w-[256px] sm:h-[474px] flex flex-col gap-2 pt-6 pl-2 sm:pl-6 pr-4 sm:rounded-[14px] bg-blend-overlay">
                <ul>
                    <div className="sm:hidden flex align-middle justify-start gap-4">
                        <button onClick={onClose}>
                            <Image src="/adminSidebarBack.svg" alt="adminSidebarBack" width={0} height={0} className="w-4 h-5" />
                        </button>
                        <div>
                            <h2 className="text-[#F2F2F2] font-medium text-2xl">Foody</h2>
                        </div>
                    </div>
                    <li className={`cursor-pointer flex items-center gap-6 p-3 hover:bg-white hover:rounded hover:bg-opacity-10 ${activeStyles('/admin')}`} onClick={() => { push('/admin'); }}>
                        <Image src="/adminSidebarDashboard.svg" alt="adminSidebarDashboard" width={0} height={0} className="w-4 h-4" />
                        <p className="text-[#FCDDEC] text-base font-medium">Dashboard</p>
                    </li>
                    <li className={`cursor-pointer flex items-center gap-6 p-3 hover:bg-white hover:rounded hover:bg-opacity-10 ${activeStyles('/admin/product')}`} onClick={() => { push('/admin/product'); }}>
                        <Image src="/adminSidebarProduct.svg" alt="adminSidebarProduct" width={0} height={0} className="w-4 h-4" />
                        <p className="text-admin-gray6 text-base font-medium">Product</p>
                    </li>
                    <li className={`cursor-pointer flex items-center gap-6 p-3 hover:bg-white hover:rounded hover:bg-opacity-10 ${activeStyles('/admin/restaurants')}`} onClick={() => { push('/admin/restaurants'); }}>
                        <Image src="/adminSidebarRestaurant.svg" alt="adminSidebarRestaurant" width={0} height={0} className="w-4 h-4" />
                        <p className="text-admin-gray6 text-base font-medium">Restaurants</p>
                    </li>
                    <li className={`cursor-pointer flex items-center gap-6 p-3 hover:bg-white hover:rounded hover:bg-opacity-10 ${activeStyles('/admin/category')}`} onClick={() => { push('/admin/category'); }}>
                        <Image src="/adminSidebarCategory.svg" alt="adminSidebarCategory" width={0} height={0} className="w-4 h-4" />
                        <p className="text-admin-gray6 text-base font-medium">Category</p>
                    </li>
                    <li className={`cursor-pointer flex items-center gap-6 p-3 hover:bg-white hover:rounded hover:bg-opacity-10 ${activeStyles('/admin/orders')}`} onClick={() => { push('/admin/orders'); }}>
                        <Image src="/adminSidebarOrders.svg" alt="adminSidebarOrders" width={0} height={0} className="w-4 h-4" />
                        <p className="text-admin-gray6 text-base font-medium">Orders</p>
                    </li>
                    <li className={`cursor-pointer flex items-center gap-6 p-3 hover:bg-white hover:rounded hover:bg-opacity-10 ${activeStyles('/admin/offer')}`} onClick={() => { push('/admin/offer'); }}>
                        <Image src="/adminSidebarOffer.svg" alt="adminSidebarOffer" width={0} height={0} className="w-4 h-4" />
                        <p className="text-admin-gray6 text-base font-medium">Offer</p>
                    </li>
                    <li className={`cursor-pointer flex items-center gap-6 p-3 hover:bg-white hover:rounded hover:bg-opacity-10 ${activeStyles('admin/login')}`} onClick={() => { push('/admin/login '); }}>
                        <Image src="/adminSidebarLogout.svg" alt="adminSidebarLogout" width={0} height={0} className="w-4 h-4" />
                        <p className="text-admin-gray6 text-base font-medium">Log out</p>
                    </li>
                </ul>
            </div>
        </div>
        // )
    )
}

export default AdminSidebar