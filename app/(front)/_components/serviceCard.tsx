import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function ServiceCard() {
    return (
        <div className=''>
            <Card>
                <CardHeader>Title</CardHeader>
                <CardContent>
                    <div className="">
                        <Image src={'/images/ab.gif'} className='h-52 w-full rounded' alt='' width={100} height={100} />
                    </div>
                    <div className="pt-4">Description</div>
                </CardContent>
                <CardFooter>
                    <Button className='bg-blue-800 hover:bg-blue-600 text-white'>
                        View details
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ServiceCard