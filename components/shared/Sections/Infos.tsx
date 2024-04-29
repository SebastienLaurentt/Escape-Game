import { Calendar, LocateFixed, Mail, Phone } from "lucide-react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Infos = () => {
  return (
    <Section marginBottom={true} marginTop={true}>
      <SectionHeader title="Envie de tenter " titleHighlight="l'aventure ?" />

      <div className="flex flex-col gap-y-8 md:flex-row md:justify-center md:gap-x-20 md:gap-y-0 lg:gap-x-28">
        {/* When and Where  */}
        <div>
          <h3 className="text-balance">Quand et où nous trouver ?</h3>

          <div className="flex flex-col gap-y-4">
            {/* Opening hours */}
            <div className="flex flex-row gap-x-8  md:gap-y-2 ">
              <div>
                <Calendar size={48} color="#991b1b" />
              </div>
              <div className="flex flex-col">
                <span>7 jours / 7 </span>
                <span>De 10h à 00h </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-row gap-x-8  md:gap-y-2 ">
              <div>
                <LocateFixed size={48} color="#991b1b" />
              </div>
              <div className="flex flex-col">
                <span>5 Rue Marcel Pagnol </span>
                <span>13000, Marseille </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact  */}
        <div>
          <h3>Comment nous contacter ?</h3>

          <ul className="flex flex-col gap-y-4">
            {/* Phone */}
            <li>
              <div className="flex flex-row gap-x-8  md:gap-y-2 ">
                <Phone size={48} color="#991b1b" />
                <div className="flex flex-col">
                  <span>Téléphone</span>
                  <span>XX XX XX XX XX</span>
                </div>
              </div>
            </li>

            {/* Email */}
            <li>
              <div className="flex flex-row  gap-x-8 md:gap-y-2">
                <Mail size={48} color="#991b1b" />
                <div className="flex flex-col">
                  <span>Email</span>
                  <span>xxx.xxxx@xxxx.fr</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Infos;
