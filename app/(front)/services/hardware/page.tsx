import MainLayout from '@/components/mainLayout'
import React from 'react'
import Hero from '../../_components/hero'
import ServiceCard from '../../_components/serviceCard'
import { Label } from '@/components/ui/label'

function Hardware() {
    return (
        <MainLayout backImage='network.webp' image='/'>
            <div className="p-8">
                <Label className='text-2xl font-bold mt-6'>Hardware</Label>
            </div>
            <div className="p-8 grid grid-cols-3 gap-8">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </MainLayout>
    )
}

export default Hardware