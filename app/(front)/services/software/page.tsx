import MainLayout from '@/components/mainLayout'
import React from 'react'
import ServiceCard from '../../_components/serviceCard'
import { Label } from '@/components/ui/label'
import ServiceTop from '../../_components/serviceTop'
import { SoftwareTabs } from './_components/softwareTabs'

function Software() {
    return (
        <MainLayout backImage='connect1.jpg' image=''>
            <ServiceTop
                image="software.webp"
                title="Software Solutions"
                description="We offer solutions ranging in the given scope ( ARTIFICIAL INTELLIGENCE, DATA SCIENCE SOLUTIONS, API INTEGRATION, WEB & MOBILE SOLUTIONS, CHATBOTS, PIPELINE DEVELOPMENT)"
                description2="Use of the software is important for automation of the organisation's tasks as well as reporting the progress or lags in the organisation's activities. This improves company's efficiency and effectiveness of the company's activities. The software reduces the workload and automation of activities."
            />
            <div className="p-8">
                <Label className='text-2xl font-bold mt-6'>Software</Label>
            </div>
            <div className="p-8">
                <SoftwareTabs />
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <ServiceCard />
                <ServiceCard />
                <ServiceCard /> */}
            </div>
        </MainLayout>
    )
}

export default Software