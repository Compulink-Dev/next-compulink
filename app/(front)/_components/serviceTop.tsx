import Image from 'next/image'
import React from 'react'

function ServiceTop() {
    return (
        <div className='w-full'>
            <div className="flex items-center gap-4 p-8">
                <div className="">
                    <Image src={'/images/hardware.jpeg'} className='h-52 w-full rounded' alt='' width={100} height={100} />
                </div>
                <div className="flex-1">
                    <p className="font-bold text-2xl">Cyber Security</p>
                    <p className="text-slate-400 mt-8">
                        Cyber security solutions are technological tools and services that help protect organizations against cyber attacks, which can result in application downtime, theft of sensitive data, damage to reputation, compliance fines, and other adverse consequences.
                    </p>
                    <p className="text-slate-400 mt-2">
                        With over 30 years of experience helping thousands of businesses like yours withstand cyber threats and protect valuable data, we’re confident in our ability to help you improve your network security.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceTop