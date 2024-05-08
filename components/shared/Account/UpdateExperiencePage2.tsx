import UpdateExperience from "@/components/shared/Account/UpdateExperience";
import { getExperienceById } from "@/lib/action";
import { notFound } from "next/navigation";

const UpdateExperiencePage2 = async ({ id }: { id: string }) => {
  const experience = await getExperienceById(id);
  
  if (!experience) {
    notFound();
  }

  return (
      <UpdateExperience experience={experience} />
  );
};

export default UpdateExperiencePage2;
