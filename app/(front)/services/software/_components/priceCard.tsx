import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const lists = [
    {
        id: 1,
        title: "Details"
    },
    {
        id: 2,
        title: "Details 2"
    },
    {
        id: 3,
        title: "Details 3"
    },
    {
        id: 4,
        title: "Details 4"
    }
]


function PriceCard({ title, image, description }: any) {
    return (
        <div className=''>
            <Card>
                <CardHeader className='font-bold text-lg'>{title}</CardHeader>
                <CardContent>
                    <div className=" text-slate-500 text-sm">{'Title'}</div>
                    <div className="pt-4 text-slate-800 font-bold">{"Price"}</div>
                    <Button className='mt-4 bg-blue-800 hover:bg-blue-600 text-white'>
                        Order Now
                    </Button>
                    <Separator className='mt-4' />
                    <div className="mt-4">
                        <ul className="">
                            {
                                lists.map((list) => (
                                    <li
                                        key={list.id}
                                        className="mb-1">
                                        {list.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PriceCard