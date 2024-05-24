import PageTitle from "@/components/shared/PageTitle";
import ReservationFlow from "@/components/shared/ReservationFlow";
import { getClosedDay, getExperiencesList } from "@/lib/action";
import { unstable_noStore } from "next/cache";

const Experiences = async () => {
  unstable_noStore();
  const closedDays = await getClosedDay();
  const experiences = await getExperiencesList();
  return (
    <main>
      <PageTitle title="Prêts à affronter l'horreur ?" />
      <ReservationFlow closedDays={closedDays} experiences={experiences} />
    </main>
  );
};

export default Experiences;
