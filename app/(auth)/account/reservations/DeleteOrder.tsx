'use client'

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { deleteOrder } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";
import { Trash } from "lucide-react";

export const DeleteOrder = ({ id }: { id: string }) => {
  const { mutate: deleteOrderMutation, isPending } = useMutation({
    mutationKey: ["delete-order"], 
    mutationFn: () => deleteOrder(id),
    onMutate: () => {
    },
    onSuccess: () => {
      toast({ title: "Order deleted successfully", variant: "destructive" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete order",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        deleteOrderMutation();
      }}
    >
      <Button size="sm" disabled={isPending}>
        {isPending ? "Deleting..." : <Trash />}
      </Button>
    </form>
  );
};
