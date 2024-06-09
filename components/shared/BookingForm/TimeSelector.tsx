import React from 'react';
import HoursChips from "@/components/shared/HoursChips";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface TimeSelectorProps {
  availableTimes: string[];
  selectedTime: string | null;
  selectedDate: Date | undefined;
  onTimeSelect: (time: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  availableTimes,
  selectedTime,
  selectedDate,
  onTimeSelect,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="w-[320px] text-center">
        C. Choisissez une horaire
      </h3>
      {selectedDate && (
        <span className="mt-1 text-md text-primary">
          {format(selectedDate, " EEEE dd MMMM", { locale: fr })
            .replace(/^\w/, (c) => c.toUpperCase())
            .replace(/ \w/g, (c) => c.toUpperCase())}
        </span>
      )}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 py-6">
          {availableTimes.map((timeSlot, index) => (
            <HoursChips
              key={index}
              hours={timeSlot}
              onClick={() => onTimeSelect(timeSlot)}
              isSelected={selectedTime === timeSlot}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;
