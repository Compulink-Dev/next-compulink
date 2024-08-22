import { CarouselSize } from '@/components/carousel'
import MainLayout from '@/components/mainLayout'
import React from 'react'

function VacancyPage() {
    return (
        <MainLayout backImage='main.jpg' image='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'>
            <div className='w-full'>
                <CarouselSize />
            </div>
        </MainLayout>
    )
}

export default VacancyPage