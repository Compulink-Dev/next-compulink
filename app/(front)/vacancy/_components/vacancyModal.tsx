import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function VacancyModal({ vacancy, onClose }: any) {
    return (
        <Dialog open={!!vacancy} onOpenChange={onClose}>
            <DialogContent className="max-w-lg w-full h-auto max-h-[80vh] overflow-y-auto mx-auto">
                <DialogHeader>
                    <DialogTitle>{vacancy.position}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <img
                        src={vacancy.imageUrl}
                        alt={vacancy.position}
                        className="w-full h-auto rounded"
                    />
                    <p>Status: {vacancy.status}</p>
                    <p>Duration: {vacancy.duration}</p>
                    {/* Download Button */}
                    <a href={vacancy.imageUrl} download className="inline-block">
                        <Button className="mt-4" variant="outline">
                            Download Image
                        </Button>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    )
}
