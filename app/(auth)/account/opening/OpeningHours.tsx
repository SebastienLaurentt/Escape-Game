import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OpeningHoursSelector from "./OpeningHoursSelector";

const OpeningHours = () => {
  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        {/* Header */}
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2">
              Horaires d&apos;ouverture
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="py-2 text-sm 2xl:px-10">
          <ul className="flex flex-col gap-y-3">
            <OpeningHoursSelector day="Lundi" />
            <OpeningHoursSelector day="Mardi" />
            <OpeningHoursSelector day="Mercredi" />
            <OpeningHoursSelector day="Jeudi" />
            <OpeningHoursSelector day="Vendredi" />
            <OpeningHoursSelector day="Samedi" />
            <OpeningHoursSelector day="Dimanche" />
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpeningHours;
