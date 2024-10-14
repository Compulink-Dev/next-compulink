//@ts-ignore
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "emailjs-com";

// Define Zod schema for form validation
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    cv: z
        .any()
        .refine((file) => file?.length === 1, "CV is required")
        .refine((file) => file[0]?.size <= 2 * 1024 * 1024, "Max file size is 2MB"),
});

export function VacancyApplyModal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: any) => {
        const formDataObj = new FormData();
        formDataObj.append("name", data.name);
        formDataObj.append("email", data.email);
        formDataObj.append("phone", data.phone);
        formDataObj.append("cv", data.cv[0]);

        try {
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formDataObj,
                "YOUR_PUBLIC_KEY"
            );
            alert("Application sent successfully!");
            reset(); // reset form after successful submission
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send application.");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-400">Apply</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Apply for this position</DialogTitle>
                    <DialogDescription>
                        Fill in the details below and attach your CV
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                {...register("name")}
                                className="col-span-3"
                            />
                            {errors.name && (
                                <p className="text-red-500 col-span-4">{errors.name?.message}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                {...register("email")}
                                className="col-span-3"
                                type="email"
                            />
                            {errors.email && (
                                <p className="text-red-500 col-span-4">{errors.email?.message}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                                Phone number
                            </Label>
                            <Input
                                id="phone"
                                {...register("phone")}
                                className="col-span-3"
                            />
                            {errors.phone && (
                                <p className="text-red-500 col-span-4">{errors.phone?.message}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="cv" className="text-right">
                                CV
                            </Label>
                            <Input
                                id="cv"
                                type="file"
                                {...register("cv")}
                                className="col-span-3"
                            />
                            {errors.cv && (
                                <p className="text-red-500 col-span-4">{errors.cv?.message}</p>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            className="bg-blue-600 hover:bg-blue-400"
                            type="submit"
                        >
                            Send application
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
