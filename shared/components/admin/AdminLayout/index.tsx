import React from 'react'
import AdminHeader from '../adminHeader'
import AdminSidebar from '../adminSidebar'

function AdminLayout({ children }: { children: any }) {
    return (
        <div className=' bg-admin-bg min-h-screen px-5'>
            <AdminHeader />
            <main>
                <AdminSidebar />
            </main>
        </div>
    )
}

export default AdminLayout