import { Button } from "@/components/ui/button";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Infos = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Envie de tenter " titleHighlight="l'aventure ?" />

      <div className="flex flex-col gap-y-8 md:flex-row md:justify-center md:gap-x-20 md:gap-y-0 lg:gap-x-28">
        {/* When and Where  */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 w-[255px] md:text-left">
            Quand et où nous trouver ?
          </h3>

          <div className="flex flex-col gap-y-4">
            {/* Opening hours */}
            <div className="flex flex-row gap-x-8  md:gap-y-2 ">
              <div className="text-primary">
                <Calendar size={48} />
              </div>
              <div className="flex flex-col">
                <span>7 jours / 7 </span>
                <span>De 10h à 00h </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-row gap-x-8  md:gap-y-2 ">
              <div className="text-primary">
                <MapPin size={48} />
              </div>
              <div className="flex flex-col">
                <span>5 Rue Marcel Pagnol </span>
                <span>13000, Marseille </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact  */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 w-[255px] md:text-left">
            Comment nous contacter ?
          </h3>

          <div className="flex flex-col gap-y-4">
            {/* Phone */}
            <div className="flex flex-row  gap-x-8  md:gap-y-2 ">
              <div className="text-primary">
                <Phone size={48} />
              </div>

              <div className="flex flex-col">
                <span>Téléphone</span>
                <span>06 12 34 56 78</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-row  gap-x-8 md:gap-y-2">
              <div className="text-primary">
                <Mail size={48} />
              </div>

              <div className="flex flex-col">
                <span>Email</span>
                <span>villaeffroi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 flex flex-row justify-center lg:my-12">
        <Button asChild aria-label="Aller à la page de la Foire aux Questions">
          <Link href="/faq">Foire aux questions</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Infos;
