import { getReservationById } from "@/lib/action";
import Preview from "./Preview";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const reservation = await getReservationById(id);

  if (!reservation) {
    return <div>La réservation avec l&apos;ID {id} n&apos;existe pas.</div>;
  }

  return <Preview reservation={reservation} />;
};

export default Page;
