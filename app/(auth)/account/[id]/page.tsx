
import UpdateForm from "@/components/shared/Account/UpdateExperience";
import { getExperienceById } from "@/lib/action";
import { notFound } from "next/navigation";

const UpdateExperiencePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const experience = await getExperienceById(id);
  console.log(experience)

  if (!experience) {
    notFound();
  }

  return (
    <div className="mx-auto mt-5 max-w-md">
      <h1 className="mb-2 text-center text-2xl">Update Experience</h1>
      <UpdateForm experience={experience} />
    </div>
  );
};

export default UpdateExperiencePage;
