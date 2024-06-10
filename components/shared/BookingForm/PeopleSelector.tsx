import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Price } from '@prisma/client'; 

interface PeopleSelectorProps {
  onPeopleSelect: (value: string) => void;
  selectedPeople: number | null;
  priceList: Price[]; 
}

const PeopleSelector: React.FC<PeopleSelectorProps> = ({ onPeopleSelect, selectedPeople, priceList }) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <h3 className="mb-1">A. Combien êtes vous ?</h3>
      <Select onValueChange={onPeopleSelect} value={selectedPeople?.toString()}>
        <SelectTrigger className=" w-[280px]" aria-label="Choisir le nombre de personnes">
          <SelectValue placeholder="Sélectionner votre nombre" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {priceList.map(price => (
              <SelectItem key={price.id} value={price.people}>
                {price.people} personnes - <span className="font-bold">{price.price}€</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PeopleSelector;
