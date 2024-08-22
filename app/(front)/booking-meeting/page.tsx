import MainLayout from '@/components/mainLayout'
import React from 'react'
import dynamic from 'next/dynamic'
import HeroCarousel from '../_components/heroCarousel'

const DynamicComponent = dynamic(() => import("../_components/twElements"))

function BookMeeting() {
    return (
        <MainLayout backImage='web.webp' image=''>
            <div>BookMeeting</div>
            <DynamicComponent />
            <HeroCarousel />
        </MainLayout>
    )
}

export default BookMeeting