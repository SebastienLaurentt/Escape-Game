import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OpeningHours = () => {
  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        {/* Header */}
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2">
              Horaires d&apos;ouverture
              <Button
                size="icon"
                variant="outline"
                className="size-6 opacity-0 transition-opacity group-hover:opacity-100"
              ></Button>
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="px-2 py-6 text-sm 2xl:px-10">
          <ul className="flex flex-col gap-y-6">
            <li>
              <div className="flex flex-row items-center justify-between">
                <span className="w-[90px]">Lundi </span>
                <div>
                  <span>Ouverture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Ouverture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
                <div>
                  <span>Fermeture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Fermeture " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center justify-between">
                <span className="w-[90px]">Mardi </span>
                <div>
                  <span>Ouverture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Ouverture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
                <div>
                  <span>Fermeture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Fermeture " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center justify-between">
                <span className="w-[90px]">Mercredi </span>
                <div>
                  <span>Ouverture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Ouverture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
                <div>
                  <span>Fermeture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Fermeture " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center justify-between">
                <span className="w-[90px]">Jeudi </span>
                <div>
                  <span>Ouverture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Ouverture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
                <div>
                  <span>Fermeture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Fermeture " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center justify-between">
                <span className="w-[90px]">Vendredi </span>
                <div>
                  <span>Ouverture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Ouverture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
                <div>
                  <span>Fermeture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Fermeture " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center justify-between">
                <span className="w-[90px]">Samedi </span>
                <div>
                  <span>Ouverture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Ouverture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
                <div>
                  <span>Fermeture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Fermeture " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center justify-between">
                <span className="w-[90px]">Dimanche </span>
                <div>
                  <span>Ouverture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Ouverture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
                <div>
                  <span>Fermeture</span>
                  <span>
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Fermeture " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="9">09.00</SelectItem>
                          <SelectItem value="10">10.00</SelectItem>
                          <SelectItem value="11">11.00</SelectItem>
                          <SelectItem value="12">12.00</SelectItem>
                          <SelectItem value="13">13.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpeningHours;
