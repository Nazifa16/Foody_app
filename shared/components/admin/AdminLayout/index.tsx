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

import React, { useEffect, useState } from 'react'
import AdminHeader from '../adminHeader'
import AdminSidebar from '../adminSidebar'

interface Props {
    showMod?: () => void
    children: React.ReactNode
}

function AdminLayout({ showMod, children }: Props) {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Listen for window resize events

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='bg-admin-bg min-h-screen px-5'>
            <AdminHeader onClick={showMod} onClickSidebar={toggleSidebar} />
            <main className='flex gap-7'>
                <AdminSidebar onClose={toggleSidebar} open={isSidebarOpen} />
                {children}
            </main>
        </div>
    )
}

export default AdminLayout