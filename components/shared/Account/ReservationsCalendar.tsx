import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { getClosedDay } from "@/lib/action";
import OpenDays from "./OpenDays";
import CloseDays from "./CloseDays";

const ReservationsCalendar = async ({ query }: { query: string }) => {
  const closedDays = await getClosedDay(query);
  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card x-chunk="dashboard-07-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Les Réservations</CardTitle>
            <CardDescription>Gestion des réservations</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <CloseDays closedDays={closedDays} />
            <OpenDays closedDays={closedDays} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ReservationsCalendar;
