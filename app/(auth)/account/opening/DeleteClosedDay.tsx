import { Button } from "@/components/ui/button";
import { deleteClosedDay } from "@/lib/action";


export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteClosedDaytWithId = deleteClosedDay.bind(null, id);
  return (
    <form action={DeleteClosedDaytWithId}>
      <Button>Réouvrir</Button>
    </form>
  );
};
