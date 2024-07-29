// import React from 'react'
// import AdminHeader from '../adminHeader'
// import AdminSidebar from '../adminSidebar'

// function AdminLayout({ children }: { children: any }) {
//     return (
//         <div className=' bg-admin-bg min-h-screen px-5'>
//             <AdminHeader />
//             <main className='flex gap-7'>
//                 <AdminSidebar />
//                 {children}
//             </main>

//         </div>
//     )
// }

// export default AdminLayout

import React from 'react'
import AdminHeader from '../adminHeader'
import AdminSidebar from '../adminSidebar'

interface Props {
    showMod?: () => void
    children: React.ReactNode
}

function AdminLayout({ showMod, children }: Props) {
    return (
        <div className='bg-admin-bg min-h-screen px-5'>
            <AdminHeader onClick={showMod} />
            <main className='flex gap-7'>
                <AdminSidebar />
                {children}
            </main>
        </div>
    )
}

export default AdminLayout