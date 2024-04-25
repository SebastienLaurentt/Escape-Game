import { Calendar, LocateFixed, Mail, Phone } from "lucide-react";
import ContactForm from "../ContactForm";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Infos = () => {
  return (
    <>
      <Section marginBottom={true} marginTop={true} classname="">
        <SectionHeader
          title=" Âmes d'aventuriers ?"
          titleHighlight="Nous rejoindre !"
        />
        <div className="flex flex-col gap-y-16 md:flex-row md:justify-between md:gap-x-12">
          <div className="md:w-1/2">
            <h3>Horaires d&apos;ouverture</h3>
            <div className="flex flex-row gap-x-8  md:gap-y-2 ">
              <div >
                <Calendar size={48} />
              </div>
              <div className="flex flex-col">
                <span>7 jours / 7 </span>
                <span>De 10h à 00h </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3>Localisation</h3>
            <div className="flex flex-row gap-x-8  md:gap-y-2 ">
              <div >
                <LocateFixed size={48} />
              </div>
              <div className="flex flex-col">
                <span>5 Rue Marcel Pagnol </span>
                <span>13000, Marseille </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section marginBottom={true} marginTop={true} classname="">
        <SectionHeader
          title=" Des questions ?"
          titleHighlight="Contactez-nous ! "
        />
        <div className="flex flex-col gap-y-16 md:flex-row md:justify-between md:gap-x-12">
          <div className="md:w-1/2">
            <h3>Par téléphone ou email</h3>
            <p className="mb-8 md:mb-24 ">
              Mr Ruben Attia <br /> Président 
            </p>
            <ul className="flex flex-col gap-y-4 md:gap-y-12">
              <li>
                <div className="flex flex-row gap-x-8  md:gap-y-2 ">
                  <Phone size={48} />
                  <div className="flex flex-col">
                    <span>Téléphone</span>
                    <span>XX XX XX XX XX</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row  gap-x-8 md:gap-y-2">
                  <Mail size={48} />
                  <div className="flex flex-col">
                    <span>Email</span>
                    <span>xxx.xxxx@xxxx.fr</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3>Par formulaire de contact</h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Infos;
