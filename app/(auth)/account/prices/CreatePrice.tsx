"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPrice } from "@/lib/action";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("people", formData.people);
    formDataToSend.append("price", formData.price);

    const result = await createPrice(formDataToSend);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-2 px-6 font-bold lg:grid-cols-4"
    >
      <Input
        type="text"
        name="people"
        value={formData.people}
        onChange={handleChange}
        placeholder="Nombre de personnes"
        required
        className="mx-auto w-[220px]"
      />
      <Input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Prix"
        required
        className="mx-auto w-[220px]"
      />
      <Button type="submit" className="mx-auto w-[180px]">Ajouter Prix</Button>
    </form>
  );
};

export default CreatePrice;
