import { getReservationById } from "@/lib/action";
import ThankYou from "./ThankYou";


const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const reservation = await getReservationById(id);
  return <ThankYou reservation={reservation} />;
};

export default Page;
 