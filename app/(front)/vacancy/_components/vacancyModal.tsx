import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { VacancyApplyModal } from "./vacancyApplyModal"
import { ScrollArea } from "@radix-ui/react-scroll-area"

export function VacancyModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'} className="border">View</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View this available position</DialogTitle>
                    <DialogDescription>
                        Check if you meet the requirements and apply
                    </DialogDescription>
                </DialogHeader>
                <div className="">
                    <ScrollArea className="h-72 w-full rounded-md border">
                        <div className="grid gap-4 py-4 space-y-2 p-4">
                            <div className="">
                                <p className="">Position</p>
                                <p className="">Software Development</p>
                            </div>
                            <div className="">
                                <p className="">Description</p>
                                <p className="">Software Development</p>
                            </div>
                            <div className="">
                                <p className="">Requirements</p>
                                <p className="">Software Development</p>
                            </div>

                        </div>
                    </ScrollArea>
                </div>
                <DialogFooter>
                    <VacancyApplyModal />
                    <Button variant={'ghost'} className="border">Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
