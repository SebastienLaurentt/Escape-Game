'use client'

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { deleteClosedDay } from "@/lib/action";
import { toast } from "@/components/ui/use-toast";
import { Trash } from "lucide-react";
import Loader from "@/components/shared/Loader";

export const DeleteButton = ({ id }: { id: string }) => {
  const { mutate: deleteClosedDayMutation, isPending } = useMutation({
    mutationKey: ["delete-closed-day"],
    mutationFn: () => deleteClosedDay(id),
    onSuccess: () => {
      toast({
        title: "Closed day reopened successfully",
        variant: "destructive",
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
      <Button type="submit" disabled={isPending}>
        {isPending ? <Loader /> : "Réouvrir"}
      </Button>
    </form>
  );
};
