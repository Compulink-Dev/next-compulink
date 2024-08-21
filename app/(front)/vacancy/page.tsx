import MainLayout from '@/components/mainLayout'
import Image from 'next/image'
import React from 'react'
import ServiceTop from '../_components/serviceTop'
import { VacancyTable } from './_components/vacancyTable'


function VacancyPage() {
    return (
        <MainLayout backImage='main.jpg' image='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'>
            <div className='p-8'>
                <p className="text-center text-2xl font-bold">Available vacancies</p>
                <div className="mt-4">
                    <VacancyTable />
                </div>
            </div>

        </MainLayout>
    )
}

export default VacancyPage