import MainLayout from '@/components/mainLayout'
import React from 'react'
import ServiceCard from '../../_components/serviceCard'
import { Label } from '@/components/ui/label'

function Software() {
    return (
        <MainLayout backImage='software.webp' image=''>
            <div className="p-8">
                <Label className='text-2xl font-bold mt-6'>Software</Label>
            </div>
            <div className="p-8 grid grid-cols-3 gap-8">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </MainLayout>
    )
}

export default Software