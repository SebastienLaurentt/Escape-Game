import { creepster } from "@/lib/font";
import React from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight: string;
  titleDescription?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleHighlight,
  titleDescription,
}) => {
  return (
    <div className="mb-6 mt-4 flex flex-col items-center text-center md:mb-8">
      <h2
        className={`${creepster} text-2xl uppercase leading-[44px] md:text-5xl md:leading-[56px] lg:text-5xl lg:leading-[64px]`}
      >
        <span>{title}</span>
        <span className="text-primary"> {titleHighlight}</span>
      </h2>
      <p>{titleDescription}</p>
    </div>
  );
};

export default SectionHeader;
