import { User } from "lucide-react";

interface PriceCardProps {
  peopleNumber: string;
  price: string;
}

const PriceCard = ({ peopleNumber, price }: PriceCardProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-accent">
      <div className="flex flex-row">
        <User className="cardIcon" />
        <span className="text-sm md:text-md xl:text-sm">{peopleNumber}</span>
      </div>
      <div className="flex flex-row">
        <span className="flex flex-row items-center gap-x-1 md:text-md xl:text-sm">
          dès
          <span className="text-xl font-semibold italic text-accent md:text-3xl ">
            {price}
          </span>
          / personne
        </span>
      </div>
    </div>
  );
};

export default PriceCard;
