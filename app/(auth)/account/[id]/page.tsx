import UpdateExperience from "@/components/shared/Account/UpdateExperience";
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
    <Section classname="my-12 md:my-20">
      <h2 className="mb-8 text-center">Mise à Jour <br /> Experience</h2>
      <UpdateExperience experience={experience} />
    </Section>
  );
};

export default UpdateExperiencePage;
