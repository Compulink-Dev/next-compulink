import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className="w-[600px]] max-w-sm  bg-red-500 "
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="">
                        <div className="p-1 w-full ">
                            <Card>
                                <CardContent className="flex w-full h-[300px] aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
