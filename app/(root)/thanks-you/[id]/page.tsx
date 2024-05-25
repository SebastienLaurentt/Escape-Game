import { getReservationById } from "@/lib/action";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const reservation = await getReservationById(id);

  return <div>aaaaa</div>;
};

export default Page;
