import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOpeningHoursList } from "@/lib/action";
import OpeningHoursSelector from "./OpeningHoursSelector";

const OpeningHours = async () => {
  const openingHoursList = await getOpeningHoursList();
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
          <ul className="mb-5 flex flex-col gap-y-3">
            {openingHoursList.map((openingHours, index) => (
              <OpeningHoursSelector
                key={index}
                openingHours={openingHours} 
              />
            ))}
          </ul>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0">
            <Button type="submit">Sauvegarder</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpeningHours;
