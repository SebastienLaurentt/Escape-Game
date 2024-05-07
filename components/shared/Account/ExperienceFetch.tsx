import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { getExperiencesList } from "@/lib/action";
import { Pencil } from "lucide-react";
import Link from "next/link";

const truncateDescription = (description: any, maxLength: number) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3) + "...";
};

const ExperienceFetch = async ({ query }: { query: string }) => {
  const experiences = await getExperiencesList(query);
  return (
    <Tabs defaultValue="week">
      <TabsContent value="week">
        <Card x-chunk="dashboard-07-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Les Expériences</CardTitle>
            <CardDescription>
              Les expériences proposées sur le site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead className="hidden lg:table-cell">Desc</TableHead>
                  <TableHead className="hidden sm:table-cell">Durée</TableHead>
                  <TableHead className="hidden md:table-cell">Unité</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Prix min
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Min Pers
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Max pers
                  </TableHead>
                  <TableHead className="md:table-cell">Edit</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {experiences.map((experience) => (
                  <TableRow key={experience.id} className="bg-accent">
                    <TableCell>{experience.name}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {truncateDescription(experience.description, 50)}{" "}
                      {/* Limite à 50 caractères */}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {experience.duration}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {experience.durationUnit}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {experience.minPrice}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {experience.minPeople}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {experience.maxPeople}
                    </TableCell>

                    <TableCell className="md:table-cell xl:cursor-pointer">
                      <Link href={`/account/${experience.id}`}>
                        <Pencil />
                      </Link>
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

export default ExperienceFetch;
