import { getClosedDay, getReservationById, getTimeSlots } from "@/lib/action";
import { unstable_noStore } from "next/cache";
import BookingInfos from "./BookingInfos";

const Page = async ({ params }: { params: { id: string } }) => {
  unstable_noStore();
  const id = params.id;
  const reservation = await getReservationById(id);
  const closedDays = await getClosedDay();
  const timeSlots = await getTimeSlots();

  if (!reservation) {
    return <div>La réservation avec l&apos;ID {id} n&apos;existe pas.</div>;
  }

  return <BookingInfos closedDays={closedDays} reservation={reservation} timeSlots={timeSlots} />;
};

export default Page;
