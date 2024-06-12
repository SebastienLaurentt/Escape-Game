"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const OpeningHoursSelector = ({ day }: { day: string }) => {
  const [isAccordionEnabled, setIsAccordionEnabled] = useState(false);
  const [accordionValue, setAccordionValue] = useState<string | undefined>("");

  const handleAccordionToggle = (checked: boolean) => {
    setIsAccordionEnabled(checked);
    setAccordionValue(checked ? "item-1" : "");
  };

  const handleValueChange = (value: string) => {
    if (isAccordionEnabled) {
      setAccordionValue(value === accordionValue ? "" : value);
    }
  };

  return (
    <li className="flex flex-col px-2">
      <Switch
        className="absolute z-20 mt-1"
        checked={isAccordionEnabled}
        onCheckedChange={handleAccordionToggle}
      />

      <Accordion
        type="single"
        collapsible
        value={accordionValue}
        onValueChange={handleValueChange}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={`p-1.5 underline-offset-1 ${
              isAccordionEnabled
                ? "hover:underline"
                : "cursor-default no-underline opacity-50"
            }`}
          >
            <div className="relative flex flex-row items-center gap-x-4">
              <span className="ml-16 text-base font-semibold">{day}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <div className="flex flex-row items-center gap-x-4">
              <Select>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Ouverture" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="9">09.00</SelectItem>
                    <SelectItem value="10">10.00</SelectItem>
                    <SelectItem value="11">11.00</SelectItem>
                    <SelectItem value="12">12.00</SelectItem>
                    <SelectItem value="13">13.00</SelectItem>
                    <SelectItem value="14">14.00</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <span>à</span>

              <Select>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Fermeture" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="15">15.00</SelectItem>
                    <SelectItem value="16">16.00</SelectItem>
                    <SelectItem value="17">17.00</SelectItem>
                    <SelectItem value="18">18.00</SelectItem>
                    <SelectItem value="19">19.00</SelectItem>
                    <SelectItem value="20">20.00</SelectItem>
                    <SelectItem value="21">21.00</SelectItem>
                    <SelectItem value="22">22.00</SelectItem>
                    <SelectItem value="23">23.00</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
};

export default OpeningHoursSelector;
