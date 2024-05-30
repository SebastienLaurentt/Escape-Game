import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { isPast, isSameDay, startOfDay } from "date-fns";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  classNames?: {
    months?: string;
    month?: string;
    caption?: string;
    caption_label?: string;
    nav?: string;
    nav_button?: string;
    nav_button_previous?: string;
    nav_button_next?: string;
    table?: string;
    head_row?: string;
    head_cell?: string;
    row?: string;
    cell?: string;
    day?: string;
    day_range_end?: string;
    day_selected?: string;
    day_today?: string;
    day_outside?: string;
    day_disabled?: string;
    day_range_middle?: string;
    day_hidden?: string;
  };
};

function Calendar({
  className,
  classNames,
  closedDays, // Ajout de la liste des jours désactivés
  ...props
}: CalendarProps & { closedDays: Date[] }) {

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date());
    const checkDate = startOfDay(date);
    
    // Retourner false si la date est aujourd'hui
    if (isSameDay(today, checkDate)) {
      return false;
    }
    
    // Vérifier si la date est passée ou désactivée
    return isPast(checkDate) || closedDays.some(day => isSameDay(day, checkDate));
  };

  // Fonction pour filtrer les dates désactivées
  const disabledDates = (date: Date) => {
    return isDisabled(date);
  };

  return (
    <DayPicker
      locale={fr}
      className={cn("p-3", className)}
      modifiers={{
        disabled: disabledDates, 
      }}
      modifiersClassNames={{
        disabled: classNames?.day_disabled || "", 
      }}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "default" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-md h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/0  [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-primary",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-foreground hover:text-primary-foreground focus:bg-primary focus:text-foreground",
        day_today: "bg-secondary text-primary-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-100 hover:bg-transparent",
        day_disabled: "text-muted-foreground opacity-100 line-through hover:bg-transparent",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
