"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface Vacancy {
  _id?: string;
  position: string;
  status: string;
  duration: string;
  imageUrl: string;
  description?: string;
  qualifications?: string[];
  skills?: string[];
  experience?: string;
}

export default function VacancyDashboard() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVacancy, setCurrentVacancy] = useState<Vacancy | null>(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [vacancyToDelete, setVacancyToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const response = await fetch("/api/vacancies");
      const data = await response.json();
      setVacancies(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
      toast({
        title: "Error",
        description: "Failed to fetch vacancies",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentVacancy) return;

    try {
      const method = currentVacancy._id ? "PUT" : "POST";
      const url = currentVacancy._id
        ? `/api/vacancies/${currentVacancy._id}`
        : "/api/vacancies";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentVacancy),
      });

      if (!response.ok) throw new Error("Failed to save vacancy");

      toast({
        title: "Success",
        description: currentVacancy._id
          ? "Vacancy updated successfully"
          : "Vacancy created successfully",
      });

      setIsDialogOpen(false);
      fetchVacancies();
    } catch (error) {
      console.error("Error saving vacancy:", error);
      toast({
        title: "Error",
        description: "Failed to save vacancy",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    if (!vacancyToDelete) return;

    try {
      const response = await fetch(`/api/vacancies/${vacancyToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete vacancy");

      toast({
        title: "Success",
        description: "Vacancy deleted successfully",
      });

      setIsDeleteConfirmOpen(false);
      fetchVacancies();
    } catch (error) {
      console.error("Error deleting vacancy:", error);
      toast({
        title: "Error",
        description: "Failed to delete vacancy",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentVacancy((prev) => ({
      ...prev!,
      [name]: value,
    }));
  };

  const handleArrayChange = (field: keyof Vacancy, value: string) => {
    setCurrentVacancy((prev) => {
      const currentArray = Array.isArray(prev![field])
        ? [...prev![field]!]
        : [];
      return {
        ...prev!,
        [field]: [...currentArray, value],
      };
    });
  };

  const removeArrayItem = (field: keyof Vacancy, index: number) => {
    setCurrentVacancy((prev) => {
      const currentArray = Array.isArray(prev![field])
        ? [...prev![field]!]
        : [];
      currentArray.splice(index, 1);
      return {
        ...prev!,
        [field]: currentArray,
      };
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Vacancies</h1>
        <Button
          className="bg-blue-800 hover:bg-blue-400"
          onClick={() => {
            setCurrentVacancy({
              position: "",
              status: "",
              duration: "",
              imageUrl: "",
              description: "",
              qualifications: [],
              skills: [],
              experience: "",
            });
            setIsDialogOpen(true);
          }}
        >
          Add New Vacancy
        </Button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-4">
          {vacancies.map((vacancy) => (
            <div
              key={vacancy._id}
              className="border rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{vacancy.position}</h3>
                <p className="text-sm text-gray-600">
                  {vacancy.status} • {vacancy.duration}
                </p>
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setCurrentVacancy(vacancy);
                    setIsDialogOpen(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    setVacancyToDelete(vacancy._id!);
                    setIsDeleteConfirmOpen(true);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {currentVacancy?._id ? "Edit Vacancy" : "Add New Vacancy"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Position
                </label>
                <Input
                  name="position"
                  value={currentVacancy?.position || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <Input
                  name="status"
                  value={currentVacancy?.status || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Duration
                </label>
                <Input
                  name="duration"
                  value={currentVacancy?.duration || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Image URL
                </label>
                <Input
                  name="imageUrl"
                  value={currentVacancy?.imageUrl || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                name="description"
                value={currentVacancy?.description || ""}
                onChange={handleInputChange}
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Experience
              </label>
              <Input
                name="experience"
                value={currentVacancy?.experience || ""}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Qualifications
              </label>
              <div className="space-y-2">
                {currentVacancy?.qualifications?.map((qual, index) => (
                  <div key={index} className="flex items-center">
                    <Input
                      value={qual}
                      onChange={(e) => {
                        const newQualifications = [
                          ...currentVacancy.qualifications!,
                        ];
                        newQualifications[index] = e.target.value;
                        setCurrentVacancy({
                          ...currentVacancy,
                          qualifications: newQualifications,
                        });
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="ml-2"
                      onClick={() => removeArrayItem("qualifications", index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleArrayChange("qualifications", "")}
                >
                  Add Qualification
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Skills</label>
              <div className="space-y-2">
                {currentVacancy?.skills?.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Input
                      value={skill}
                      onChange={(e) => {
                        const newSkills = [...currentVacancy.skills!];
                        newSkills[index] = e.target.value;
                        setCurrentVacancy({
                          ...currentVacancy,
                          skills: newSkills,
                        });
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="ml-2"
                      onClick={() => removeArrayItem("skills", index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleArrayChange("skills", "")}
                >
                  Add Skill
                </Button>
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {currentVacancy?._id ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the
              vacancy.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
