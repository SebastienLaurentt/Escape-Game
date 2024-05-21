import { Button } from "@/components/ui/button";
import { deleteReservation } from "@/lib/action";
import { Trash } from "lucide-react";

export const DeleteReservation = ({ id }: { id: string }) => {
  const DeleteReservationWithId = deleteReservation.bind(null, id);
  return (
    <form action={DeleteReservationWithId}>
      <Button size="sm">
        <Trash />
      </Button>
    </form>
  );
};
