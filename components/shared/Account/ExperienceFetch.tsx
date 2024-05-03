import { getExperiencesList } from "@/lib/action";
import Link from "next/link";

const ExperienceFetch = async ({ query }: { query: string }) => {
  const experiences = await getExperiencesList(query);
  return (
    <ul className="flex flex-row gap-x-4">
      {experiences.map((experience) => (
        <li
          key={experience.name}
          className="rounded-lg bg-background px-3 py-1"
        >
          <Link href={`/account/${experience.name}`}>{experience.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceFetch;
