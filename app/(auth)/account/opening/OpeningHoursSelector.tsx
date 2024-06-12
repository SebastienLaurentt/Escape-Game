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

  return (
    <li className="flex flex-col px-2">
      <Switch
        className="absolute z-20 mt-1"
        checked={isAccordionEnabled}
        onCheckedChange={(checked) => setIsAccordionEnabled(checked)}
      />

      <Accordion type="single" collapsible disabled={!isAccordionEnabled}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-1.5">
            <div className="relative flex flex-row items-center gap-x-4">
              <span className=" ml-16 text-base font-semibold">{day}</span>
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
                    <SelectItem value="9">09.00</SelectItem>
                    <SelectItem value="10">10.00</SelectItem>
                    <SelectItem value="11">11.00</SelectItem>
                    <SelectItem value="12">12.00</SelectItem>
                    <SelectItem value="13">13.00</SelectItem>
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
