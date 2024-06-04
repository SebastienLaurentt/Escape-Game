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
import { DeleteReservation } from "./DeleteReservation";

// Function to format date as "Jour de la semaine DD MM AAAA"
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

const ReservationsFetch = async () => {
  const reservations = await getReservationsList();
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
                  <TableHead className="hidden text-center lg:table-cell">
                    Edit
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {reservations.map((reservation) => {
                  const bookedSlot = reservation.experience.bookedSlots[0]; // Assuming each experience has one booked slot for simplicity

                  return (
                    <TableRow
                      key={reservation.id}
                      className="bg-accent text-center"
                    >
                      <TableCell>{reservation.name}</TableCell>
                      <TableCell className="hidden xl:table-cell">
                        {reservation.email}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {reservation.phone}
                      </TableCell>
                      <TableCell className="md:table-cell">
                        {bookedSlot?.date
                          ? formatDate(bookedSlot.date.toString())
                          : "N/A"}
                      </TableCell>
                      <TableCell className="md:table-cell">
                        {bookedSlot?.time ?? "N/A"}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {reservation.people}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {reservation.experience?.name ?? "N/A"}
                      </TableCell>
                      <TableCell className="hidden xl:table-cell">
                        {reservation.price}
                      </TableCell>
                      <TableCell className="hidden lg:flex lg:flex-row lg:justify-center xl:cursor-pointer">
                        <DeleteReservation id={reservation.id} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ReservationsFetch;
