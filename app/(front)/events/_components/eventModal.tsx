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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EventModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Register</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Register for a seat</DialogTitle>
                    <DialogDescription>
                        {"Register earlier to get a booking"}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Lloyd Matare"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            defaultValue="example@gmail.com"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Contact" className="text-right">
                            Contact
                        </Label>
                        <Input
                            id="Contact"
                            defaultValue="+263778191278"
                            className="col-span-3"
                        />
                    </div>

                </div>
                <DialogFooter>
                    <Button type="submit">Register event</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
