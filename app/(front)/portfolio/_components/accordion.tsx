import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { BringToFront, Globe, ScanEye } from "lucide-react"

export function AccordionTabs() {
    return (
        <Accordion type="single" collapsible className="w-full p-8">
            <AccordionItem value="item-1">
                <AccordionTrigger className="py-4">
                    <div className="flex gap-2 text-4xl items-center">
                        <Globe width={40} height={40} />
                        <p className="font-bold">Our Mission</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet fugit dolorum omnis pariatur asperiores perspiciatis enim in est dolor voluptate reiciendis suscipit distinctio, magni, quas placeat veniam corporis repudiandae!
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className="flex gap-2 text-4xl items-center">
                        <ScanEye width={40} height={40} />
                        <p className="font-bold">Our Vision</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <div className="flex gap-2 text-4xl items-center">
                        <BringToFront width={40} height={40} />
                        <p className="font-bold">Our Strategy</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
