import { Button } from "@/components/ui/button";

const OpenDays = ({
  closedDays,
}: {
  closedDays: { id: string; date: Date }[];
}) => {
  return (
    <div>
      {closedDays.map((day: { id: string; date: Date }) => (
        <div key={day.id}><span>{day.date.toISOString()}</span> <Button> Réouvrir </Button></div>
      ))}
    </div>
  );
};

export default OpenDays;
