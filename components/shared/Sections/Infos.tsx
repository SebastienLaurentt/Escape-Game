'use client'

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Infos = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <Section marginBottom={true} marginTop={true}>
      <div ref={containerRef} className="opacity-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isInView ? 1 : 0 }}>
        <SectionHeader title="Nous" titleHighlight="rejoindre" />

        <div className={`flex flex-col gap-y-16 md:flex-row md:justify-center md:gap-x-20 md:gap-y-0 lg:gap-x-28 ${isInView ? 'animate-fade-in' : ''}`}>
          {/* When and Where */}
          <div className="mx-auto flex w-[255px] flex-col items-center md:mx-0">
            <h3 className="mb-4 w-full text-center md:text-left">
              Quand et où nous trouver ?
            </h3>

            <div className="flex w-full flex-col gap-y-4">
              {/* Opening hours */}
              <div className="flex flex-col items-center gap-y-2 text-center md:flex-row md:gap-x-6 md:text-left">
                <div className="text-primary">
                  <Calendar size={48} />
                </div>

                <div className="flex flex-col">
                  <span>7 jours / 7 </span>
                  <span>De 10h à 00h </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center gap-y-2 text-center md:flex-row md:gap-x-6 md:text-left">
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

          {/* Contact */}
          <div className="mx-auto flex w-[255px] flex-col items-center md:mx-0">
            <h3 className="mb-4 w-full text-center md:text-left">
              Comment nous contacter ?
            </h3>

            <div className="flex w-full flex-col gap-y-4">
              {/* Phone */}
              <div className="flex flex-col items-center gap-y-2 text-center md:flex-row md:gap-x-6 md:text-left">
                <div className="text-primary">
                  <Phone size={48} />
                </div>

                <div className="flex flex-col">
                  <span>Téléphone</span>
                  <span>06 12 34 56 78</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center gap-y-2 text-center md:flex-row md:gap-x-6 md:text-left">
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
      </div>
    </Section>
  );
};

export default Infos;
