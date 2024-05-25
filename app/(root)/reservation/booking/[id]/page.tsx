import { getExperiencesList } from "@/lib/action";
import { unstable_noStore } from "next/cache";
import BookingInfos from "./BookingInfos";

const Page = async () => {
  unstable_noStore();
  const experiences = await getExperiencesList();
  return <BookingInfos />;
};

export default Page;
