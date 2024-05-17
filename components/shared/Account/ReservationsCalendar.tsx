"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import React from "react";

const ReservationsCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card x-chunk="dashboard-07-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Les Réservations</CardTitle>
            <CardDescription>Gestion des réservations</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} />
            <Button>Fermer le jour</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ReservationsCalendar;
