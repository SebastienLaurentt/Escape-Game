import { Button } from "@/components/ui/button";
import { deleteOrder } from "@/lib/action";
import { Trash } from "lucide-react";

export const DeleteOrder = ({ id }: { id: string }) => {
  const DeleteOrderWithId = deleteOrder.bind(null, id);
  return (
    <form action={DeleteOrderWithId}>
      <Button size="sm">
        <Trash />
      </Button>
    </form>
  );
};
