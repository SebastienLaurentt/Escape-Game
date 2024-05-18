"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import SetOpeningDays from "./SetOpeningDays";

const ReservationsCalendar = () => {
  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card x-chunk="dashboard-07-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Les Réservations</CardTitle>
            <CardDescription>Gestion des réservations</CardDescription>
          </CardHeader>
          <CardContent>
            <SetOpeningDays />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ReservationsCalendar;
