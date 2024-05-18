import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { getClosedDay } from "@/lib/action";
import CloseDays from "./CloseDays";
import OpenDays from "./OpenDays";

const OpeningDays = async ({ query }: { query: string }) => {
  const closedDays = await getClosedDay(query);
  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card x-chunk="dashboard-07-chunk-3">
          <CardHeader className="bg-muted/50 px-7">
            <CardTitle>Jours d&apos;ouverture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8 p-6 md:flex-row md:justify-between xl:justify-start">
            <CloseDays closedDays={closedDays} />
            <Separator className="md:hidden" />
            <Separator
              orientation="vertical"
              className="mx-2 my-auto hidden h-48 md:flex"
            />
            <OpenDays closedDays={closedDays} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default OpeningDays;
