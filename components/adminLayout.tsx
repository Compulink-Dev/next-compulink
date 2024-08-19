import Header from '@/app/(dashboard)/_components/header'
import Sidebar from '@/app/(dashboard)/_components/sidebar'
import React from 'react'

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex w-screen'>
            <Sidebar />
            <main className="w-full">
                <Header />
                {children}
            </main>
        </div>
    )
}

export default AdminLayout