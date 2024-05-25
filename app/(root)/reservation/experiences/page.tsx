import { getExperiencesList } from "@/lib/action";
import { unstable_noStore } from "next/cache";
import ExperienceChoice from "./ExperienceChoice";

const Page = async () => {
  unstable_noStore();
  const experiences = await getExperiencesList();
  return <ExperienceChoice experiences={experiences} />;
};

export default Page;
