"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const TESTIMONIALS = [
  {
    text: "C'était une expérience absolument terrifiante et excitante! J'ai adoré chaque moment passé à résoudre les énigmes effrayantes.",
    name: "Alice",
    experienceType: "Villa des Damnés",
  },
  {
    text: "Une expérience intense et inoubliable. J'ai frissonné du début à la fin. Bravo pour cette ambiance incroyable!",
    name: "Tom Hardy",
    experienceType: "Cercle des Ténèbres",
  },
  {
    text: "J'ai eu des frissons tout au long de l'aventure! C'est sans doute le meilleur escape game d'horreur que j'ai fait.",
    name: "Sophie",
    experienceType: "Secrets du Sanctuaire",
  },
  {
    text: "L'ambiance, les décors, les énigmes... Tout était parfait. Une expérience à ne pas manquer pour les amateurs de sensations fortes.",
    name: "Thorfinn",
    experienceType: "Villa des Damnés",
  },
  {
    text: "Je ne savais pas à quoi m'attendre, mais ça a dépassé toutes mes attentes. J'ai hâte d'y retourner!",
    name: "Clara",
    experienceType: "Cercle des Ténèbres",
  },
  {
    text: "La peur était réelle, mais l'excitation l'était encore plus. Une aventure terrifiante et captivante.",
    name: "Ana",
    experienceType: "Secrets du Sanctuaire",
  },
  {
    text: "Un escape game d'horreur digne des meilleurs films. J'ai été transporté dans un univers sombre et mystérieux que je n'oublierai jamais.",
    name: "Emma",
    experienceType: "Villa des Damnés",
  },
  {
    text: "Des énigmes bien pensées et une ambiance glaçante. Cet escape game mérite d'être essayé par tous les fans d'horreur.",
    name: "Nathan",
    experienceType: "Cercle des Ténèbres",
  },
  {
    text: "J'ai sursauté plus d'une fois. C'était effrayant, mais tellement amusant. Une expérience inégalée!",
    name: "Léa",
    experienceType: "Secrets du Sanctuaire",
  },
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: { text: string; name: string; experienceType: string }[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          text={review.text}
          name={review.name}
          experienceType={review.experienceType}
        />
      ))}
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  name: string;
  experienceType: string;
}

function Review({
  text,
  name,
  experienceType,
  className,
  ...props
}: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] border p-8 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <p className="text-pretty md:text-md">{text}</p>
      <span className="mt-4 block text-sm text-secondary-foreground">
        {name}
      </span>
      <span className="text-md font-semibold text-primary">
        {experienceType}
      </span>
    </div>
  );
}

function ReviewGrid({ isVisible }: { isVisible: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const columns = splitArray(TESTIMONIALS, 3); // Change to 3 columns
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = columns[2];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3", // Add xl:grid-cols-3
        isVisible && "animate-fade-in"
      )}
    >
      {isVisible ? (
        <>
          <ReviewColumn reviews={column1} msPerPixel={30} />
          <ReviewColumn
            reviews={column2}
            className="hidden md:block"
            msPerPixel={40}
          />
          <ReviewColumn
            reviews={column3}
            className="hidden xl:block"
            msPerPixel={30}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950" />
    </div>
  );
}

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <Section marginBottom={true}>
      <div
        ref={containerRef}
        className="px-4 opacity-0 transition-opacity duration-700 ease-in-out md:px-6 lg:px-8 xl:px-20 2xl:px-32"
        style={{ opacity: isInView ? 1 : 0 }}
      >
        <SectionHeader title="Témoignages des" titleHighlight="Courageux" />
        <ReviewGrid isVisible={isInView} />
      </div>
    </Section>
  );
}
