import UpdateForm from "@/components/shared/Account/UpdateExperience";
import Section from "@/components/shared/Section";
import { getExperienceById } from "@/lib/action";
import { notFound } from "next/navigation";

const UpdateExperiencePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const experience = await getExperienceById(id);
  console.log(experience);

  if (!experience) {
    notFound();
  }

  return (
    <Section classname="my-8">
      <h1 className="mb-8 text-center">Update Experience</h1>
      <UpdateForm experience={experience} />
    </Section>
  );
};

export default UpdateExperiencePage;
