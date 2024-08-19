import MainLayout from '@/components/mainLayout'
import { Label } from '@/components/ui/label'
import React from 'react'
import ServiceCard from '../../_components/serviceCard'

function CloudComputing() {
    return (
        <MainLayout backImage='host.webp' image=''>
            <div className="p-8">
                <Label className='text-2xl font-bold mt-6'>Cloud Computing</Label>
            </div>
            <div className="p-8 grid grid-cols-3 gap-8">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </MainLayout>
    )
}

export default CloudComputing