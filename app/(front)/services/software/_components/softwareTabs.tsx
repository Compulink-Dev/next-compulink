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



const basic = [
    {
        id: 1,
        title: "HTTPS/SSL "
    },
    {
        id: 2,
        title: "Unlimited Bandwidth "
    },
    {
        id: 3,
        title: "SD Space - 2.5 GB "
    },
    {
        id: 4,
        title: "Email Accounts - 5 "
    }
]

const gold = [
    {
        id: 1,
        title: "HTTPS/SSL "
    },
    {
        id: 2,
        title: "Unlimited Bandwidth "
    },
    {
        id: 3,
        title: "SD Space - 5 GB "
    },
    {
        id: 4,
        title: "Email Accounts - 20 "
    }
]

const premium = [
    {
        id: 1,
        title: "HTTPS/SSL "
    },
    {
        id: 2,
        title: "Unlimited Bandwidth "
    },
    {
        id: 3,
        title: "SD Space - 10 GB "
    },
    {
        id: 4,
        title: "Email Accounts - 50 "
    }
]

const custom = [
    {
        id: 1,
        title: "User customized"
    }
]

const EmailSilver = [
    {
        id: 1,
        title: "HTTPS/SSL "
    },
    {
        id: 2,
        title: "Unlimited Bandwidth "
    },
    {
        id: 3,
        title: "SD Space - 10 GB "
    },
    {
        id: 4,
        title: "Email Accounts - 50 "
    }
]

const EmailGold = [
    {
        id: 1,
        title: "HTTPS/SSL "
    },
    {
        id: 2,
        title: "Unlimited Bandwidth "
    },
    {
        id: 3,
        title: "SD Space - 10 GB "
    },
    {
        id: 4,
        title: "Email Accounts - 50 "
    }
]


const EmailPremium = [
    {
        id: 1,
        title: "HTTPS/SSL "
    },
    {
        id: 2,
        title: "Unlimited Bandwidth "
    },
    {
        id: 3,
        title: "SD Space - 10 GB "
    },
    {
        id: 4,
        title: "Email Accounts - 50 "
    }
]



export function SoftwareTabs() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-2 w-full md:w-[400px]">
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
                                    <PriceCard
                                        lists={basic}
                                        title="Silver packages"
                                        subtitle="1-5 pages"
                                        price="150"
                                    />
                                    <PriceCard
                                        lists={gold}
                                        title="Gold packages"
                                        subtitle="1-8 pages"
                                        price="250"
                                    />
                                    <PriceCard
                                        lists={premium}
                                        title="Platinum packages"
                                        subtitle="1-12 pages"
                                        price="300"
                                    />
                                    <PriceCard
                                        lists={custom}
                                        title="Custom packages"
                                        subtitle="User defined"
                                        price="N/A"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <p className="text-lg font-bold">Email Hosting</p>
                                <div className="grid grid-cols-1 md:grid-cols-4 mt-2 gap-4 items-center">
                                    <PriceCard
                                        lists={EmailSilver}
                                        title="Silver packages"
                                        subtitle="1-5 pages"
                                        price="150"
                                    />
                                    <PriceCard
                                        lists={EmailGold}
                                        title="Gold packages"
                                        subtitle="1-8 pages"
                                        price="250"
                                    />
                                    <PriceCard
                                        lists={EmailPremium}
                                        title="Platinum packages"
                                        subtitle="1-12 pages"
                                        price="300"
                                    />
                                    <PriceCard
                                        lists={custom}
                                        title="Custom packages"
                                        subtitle="User defined"
                                        price="N/A"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <p className="text-lg font-bold">Website Hosting</p>
                                <div className="grid grid-cols-1 md:grid-cols-4 mt-2 gap-4 items-center">
                                    <PriceCard
                                        lists={basic}
                                        title="Silver packages"
                                        subtitle="1-5 pages"
                                        price="150"
                                    />
                                    <PriceCard
                                        lists={gold}
                                        title="Gold packages"
                                        subtitle="1-8 pages"
                                        price="250"
                                    />
                                    <PriceCard
                                        lists={premium}
                                        title="Platinum packages"
                                        subtitle="1-12 pages"
                                        price="300"
                                    />
                                    <PriceCard
                                        lists={custom}
                                        title="Custom packages"
                                        subtitle="User defined"
                                        price="N/A"
                                    />
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
                                link="software/e-learn"
                                description="An electronic learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools, and resources to support and enhance education delivery and management. One type of eLearning software is a learning management system (LMS)."
                            />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
