
import { getExperienceById } from "@/lib/action";
import { notFound } from "next/navigation";

const UpdateExperiencePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const experience = await getExperienceById(id);


  if (!experience) {
    notFound();
  }

  return (
    <div className="mx-auto mt-5 max-w-md">
      <h1 className="mb-2 text-center text-2xl">Update Experience</h1>
    </div>
  );
};

export default UpdateExperiencePage;
