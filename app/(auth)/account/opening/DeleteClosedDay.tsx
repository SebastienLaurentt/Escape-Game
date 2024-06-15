"use client";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { deleteClosedDay } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";

export const DeleteButton = ({ id }: { id: string }) => {
  const { mutate: deleteClosedDayMutation, isPending } = useMutation({
    mutationKey: ["delete-closed-day"],
    mutationFn: () => deleteClosedDay(id),
    onSuccess: () => {
      toast({
        title: "Jour réouvert !",
        variant: "success",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to reopen closed day",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteClosedDayMutation();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" disabled={isPending} variant="tertiary">
        {isPending ? <Loader /> : "Réouvrir"}
      </Button>
    </form>
  );
};
