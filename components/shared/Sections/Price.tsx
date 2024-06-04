'use client'

import { useRef } from "react";
import { useInView } from "framer-motion";
import PriceCard from "../PriceCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Price = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <Section marginBottom={true} marginTop={true}>
      <div ref={containerRef} className="opacity-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isInView ? 1 : 0 }}>
        <SectionHeader title="Des tarifs" titleHighlight="dégressifs" />
        <ul className={`flex flex-col items-center justify-center gap-y-4 md:gap-y-6 lg:flex-row lg:gap-x-4 xl:gap-x-6 ${isInView ? 'animate-fade-in' : ''}`}>
          <li>
            <PriceCard peopleNumber="2 personnes" price="35€" />
          </li>
          <li>
            <PriceCard peopleNumber="3 à 4 personnes" price="30€" />
          </li>
          <li>
            <PriceCard peopleNumber="5 à 6 personnes" price="25€" />
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Price;
