"use client";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { deletePrice } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";

export const DeletePrice = ({ id }: { id: string }) => {
  const { mutate: deletePriceMutation, isPending } = useMutation({
    mutationKey: ["delete-price"],
    mutationFn: () => deletePrice(id),
    onSuccess: () => {
      toast({
        title: "Tarif supprimé !",
        variant: "success",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete price",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deletePriceMutation();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" disabled={isPending}>
        {isPending ? <Loader /> : "Supprimer"}
      </Button>
    </form>
  );
};
