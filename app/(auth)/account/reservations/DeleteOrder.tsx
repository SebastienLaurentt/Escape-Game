"use client";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { deleteOrder } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";
import { Trash } from "lucide-react";

export const DeleteOrder = ({ id }: { id: string }) => {
  const { mutate: deleteOrderMutation, isPending } = useMutation({
    mutationKey: ["delete-order"],
    mutationFn: () => deleteOrder(id),
    onMutate: () => {},
    onSuccess: () => {
      toast({ title: "Réservation supprimée !", variant: "success" });
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
        {isPending ? (
          <span className="flex flex-row items-center gap-x-2">
            <Loader color="white" />
          </span>
        ) : (
          <Trash  />
        )}
      </Button>
    </form>
  );
};
