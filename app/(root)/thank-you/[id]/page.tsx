import Section from "@/components/shared/Section";
import { getReservationById } from "@/lib/action";
import ThankYou from "./ThankYou";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const reservation = await getReservationById(id);

  if (!reservation) {
    return <div>La réservation avec l&apos;ID {id} n&apos;existe pas.</div>;
  }

  return (
  <Section classname="flex flex-col justify-center">
    <ThankYou reservation={reservation} />
  </Section>
  )
};

export default Page;
