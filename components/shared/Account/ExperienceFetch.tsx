import { getExperiencesList } from "@/lib/action";
import Link from "next/link";

const ExperienceFetch = async ({ query }: { query: string }) => {
  const experiences = await getExperiencesList(query);
  return (
    <ul className="flex flex-row justify-center gap-x-4">
      {experiences.map((experience) => (
        <li
          key={experience.id}
          className="rounded-lg bg-primary px-3 py-2 font-bold uppercase text-primary-foreground"
        >
          <Link href={`/account/${experience.id}`}>{experience.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceFetch;
