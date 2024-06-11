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
    // Gérer la réponse de l'action, par exemple afficher un message de succès ou d'erreur
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="numberOfPeople"
        value={formData.people}
        onChange={handleChange}
        placeholder="Nombre de personnes"
        required
      />
      <Input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Prix"
        required
      />
      <Button type="submit">Ajouter Prix</Button>
    </form>
  );
};

export default CreatePrice;
