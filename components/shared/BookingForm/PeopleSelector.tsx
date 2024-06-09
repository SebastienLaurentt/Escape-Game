import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PeopleSelectorProps {
  onPeopleSelect: (value: string) => void;
  selectedPeople: number | null;
}

const PeopleSelector: React.FC<PeopleSelectorProps> = ({ onPeopleSelect, selectedPeople }) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <h3 className="mb-1">A. Combien êtes vous ?</h3>
      <Select onValueChange={onPeopleSelect} value={selectedPeople?.toString()}>
        <SelectTrigger className=" w-[280px]" aria-label="Choisir le nombre de personnes">
          <SelectValue placeholder="Sélectionner votre nombre" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="2">
              2 personnes - <span className="font-bold">70€</span>
            </SelectItem>
            <SelectItem value="3">
              3 personnes - <span className="font-bold">90€</span>
            </SelectItem>
            <SelectItem value="4">
              4 personnes - <span className="font-bold">120€</span>
            </SelectItem>
            <SelectItem value="5">
              5 personnes - <span className="font-bold">125€</span>
            </SelectItem>
            <SelectItem value="6">
              6 personnes - <span className="font-bold">150€</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PeopleSelector;
