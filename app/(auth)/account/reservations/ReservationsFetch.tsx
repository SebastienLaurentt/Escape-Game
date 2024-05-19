import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { getReservationsList } from "@/lib/action";

const ReservationsFetch = async ({ query }: { query: string }) => {
  const reservations = await getReservationsList(query);
  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card x-chunk="dashboard-07-chunk-3">
          <CardHeader className="bg-muted/50 px-7">
            <CardTitle>Liste des Réservations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Nom</TableHead>
                  <TableHead className="hidden text-center lg:table-cell">
                    Email
                  </TableHead>
                  <TableHead className="hidden text-center sm:table-cell">
                    Téléphone
                  </TableHead>
                  <TableHead className="hidden text-center md:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="hidden text-center md:table-cell">
                    Heure
                  </TableHead>
                  <TableHead className="hidden text-center md:table-cell">
                    Personnes
                  </TableHead>
                  <TableHead className="hidden text-center md:table-cell">
                    Expérience
                  </TableHead>
                  <TableHead className="text-center md:table-cell">
                    Prix
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow
                    key={reservation.id}
                    className="bg-accent text-center "
                  >
                    <TableCell>{reservation.name}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {reservation.email}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {reservation.phone}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {reservation.date.toString()}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {reservation.time}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {reservation.people}
                    </TableCell>
                    <TableCell className="hidden md:table-cell ">
                      {reservation.experienceId}
                    </TableCell>
                    <TableCell className="hidden md:table-cell ">
                      {reservation.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ReservationsFetch;
