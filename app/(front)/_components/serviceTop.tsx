import Image from 'next/image'
import React from 'react'

function ServiceTop({ title, description, description2 }: any) {
    return (
        <div className='w-full'>
            <div className="flex items-center gap-4 p-8">
                <div className="">
                    <Image src={'/images/hardware.jpeg'} className='h-52 w-full rounded' alt='' width={100} height={100} />
                </div>
                <div className="flex-1">
                    <p className="font-bold text-2xl">{title}</p>
                    <p className="text-slate-400 mt-8">
                        {description}
                    </p>
                    <p className="text-slate-400 mt-2">
                        {description2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceTop