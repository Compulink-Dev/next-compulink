import ServiceCard from "@/app/(front)/_components/serviceCard"
import ServiceTop from "@/app/(front)/_components/serviceTop"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import PriceCard from "./priceCard"

export function SoftwareTabs() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-2 w-[400px]">
                <TabsTrigger value="prices">Software Prices</TabsTrigger>
                <TabsTrigger value="projects">Software Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="prices">
                <Card>
                    <CardHeader>
                        <CardTitle>Software Prices</CardTitle>
                        <CardDescription>
                            Check out our cheap design and development prices for your desired project.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex flex-col gap-4">
                            <div className="">
                                <p className="text-lg font-bold">Website Design Packages</p>
                                <div className="grid grid-cols-1 md:grid-cols-4 mt-2 gap-4 items-center">
                                    <PriceCard />
                                    <PriceCard />
                                    <PriceCard />
                                    <PriceCard />
                                </div>
                            </div>

                            <div className="">
                                <p className="text-lg font-bold">Hosting Packages</p>
                                <div className="grid grid-cols-1 md:grid-cols-4 mt-2 gap-4 items-center">
                                    <PriceCard />
                                </div>
                            </div>

                            <div className="">
                                <p className="text-lg font-bold">Website Design</p>
                                <div className="grid grid-cols-1 md:grid-cols-4 mt-2 gap-4 items-center">
                                    <PriceCard />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="projects">
                <Card>
                    <CardHeader>
                        <CardTitle>Projects</CardTitle>
                        <CardDescription>
                            Checkout our projects for reference.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <ServiceCard
                                image="e-learn.jpeg"
                                title="E-Education Platform"
                                description="An electronic learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools, and resources to support and enhance education delivery and management. One type of eLearning software is a learning management system (LMS)."
                            />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
