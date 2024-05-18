
import PageTitle from "@/components/shared/PageTitle";
import ReservationFlow from "@/components/shared/ReservationFlow";
import { getClosedDay } from "@/lib/action";

const Experiences = async ({ query }: { query: string }) => {
  const closedDays = await getClosedDay(query);
  return (
    <main>
      <PageTitle title="Prêts à affronter l'horreur ?" />
      <ReservationFlow closedDays={closedDays} />
    </main>
  );
};

export default Experiences;
