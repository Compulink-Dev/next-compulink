import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { VacancyModal } from "./vacancyModal"
import { VacancyApplyModal } from "./vacancyApplyModal"
import Link from "next/link"

const vacancies = [
    {
        position: "Software Developer",
        status: "Short term contract",
        duration: "3 Months",
    },
    {
        position: "Networks Intern",
        status: "Internship",
        duration: "1 year",
    },
    {
        position: "Accounts Clerk",
        status: "Graduate Trainee",
        duration: "2 years",
    }
]

export function VacancyTable() {
    return (
        <Table className="mt-6">
            <TableCaption>A list of your recent job vacancies.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="text-right">Apply</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {vacancies.map((vacancy) => (
                    <TableRow key={vacancy.position}>
                        <TableCell className="font-medium">{vacancy.position}</TableCell>
                        <TableCell>{vacancy.status}</TableCell>
                        <TableCell>{vacancy.duration}</TableCell>
                        <TableCell className="text-right">
                            <div className="space-x-2">
                                {/* <VacancyModal /> */}
                                <Button className="border" variant={'ghost'}>
                                    <Link href={"/vacancy/2"}>
                                        View
                                    </Link>
                                </Button>
                                <VacancyApplyModal />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
