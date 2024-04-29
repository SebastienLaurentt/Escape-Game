import { User } from "lucide-react";

interface PriceCardProps {
  peopleNumber: string;
  price: string;
}

const PriceCard = ({ peopleNumber, price }: PriceCardProps) => {
  return (
    <div className="flex w-[226px] flex-col items-center gap-y-3 rounded-lg border p-4 md:w-[282px] md:p-6">
      <div className="flex flex-row items-center">
        <User className="cardIcon" />
        <span className="text-md md:text-lg ">{peopleNumber}</span>
      </div>
      <div className="flex flex-row">
        <span className="flex flex-row items-center gap-x-1 text-md md:text-lg">
          <span className=" text-xl font-semibold italic text-accent md:text-2xl ">
            {price}
          </span>
          / personne
        </span>
      </div>
    </div>
  );
};

export default PriceCard;
