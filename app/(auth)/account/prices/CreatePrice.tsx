"use client";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { createPrice } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const CreatePrice = () => {
  const [formData, setFormData] = useState({
    people: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const {
    mutate: createPriceMutation,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["create-price"],
    mutationFn: async (formData: FormData) => {
      const result = await createPrice(formData);
      return result;
    },
    onError: () => {
      alert("An error occurred while creating the price.");
    },
    onSuccess: () => {
      toast({ title: "Nouveau tarif ajouté !", variant: "success" });
      setFormData({ people: "", price: "" });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("people", formData.people);
    formDataToSend.append("price", formData.price);

    createPriceMutation(formDataToSend);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 grid grid-cols-3 font-bold lg:grid-cols-4 xl:grid-cols-4"
    >
      <Input
        type="text"
        name="people"
        value={formData.people}
        onChange={handleChange}
        placeholder="Nbr de personnes"
        required
        className="mx-auto w-[100px] md:w-[200px] xl:w-[180px] 2xl:w-[200px]"
      />
      <Input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Prix"
        required
        className="mx-auto w-[100px] md:w-[200px] xl:w-[180px] 2xl:w-[200px]"
      />
      <Button
        type="submit"
        className="mx-auto flex w-[120px] justify-center"
        disabled={isPending}
        variant="tertiary"
      >
        {isPending ? (
          <span className="flex flex-row items-center gap-x-2">
            Ajout <Loader />
          </span>
        ) : (
          "Ajouter Prix"
        )}
      </Button>
    </form>
  );
};

export default CreatePrice;
