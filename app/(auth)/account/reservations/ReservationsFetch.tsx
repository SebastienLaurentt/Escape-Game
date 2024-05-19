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

// Function to format date as "Jour de la semaine DD MM AAAA"
const formatDate = (dateString:string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

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
                  <TableHead className="hidden text-center xl:table-cell">
                    Email
                  </TableHead>
                  <TableHead className="hidden text-center sm:table-cell">
                    Téléphone
                  </TableHead>
                  <TableHead className="text-center md:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="text-center md:table-cell">
                    Heure
                  </TableHead>
                  <TableHead className="hidden text-center md:table-cell">
                    Nombre
                  </TableHead>
                  <TableHead className="hidden text-center md:table-cell">
                    Expé
                  </TableHead>
                  <TableHead className="hidden text-center xl:table-cell">
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
                    <TableCell className="hidden xl:table-cell">
                      {reservation.email}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {reservation.phone}
                    </TableCell>
                    <TableCell className=" md:table-cell">
                    {formatDate(reservation.date.toDateString())}
                    </TableCell>
                    <TableCell className="md:table-cell">
                      {reservation.time}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {reservation.people}
                    </TableCell>
                    <TableCell className="hidden md:table-cell ">
                      {reservation.experienceId}
                    </TableCell>
                    <TableCell className="hidden xl:table-cell ">
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
