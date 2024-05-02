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
    <div className="mb-12 flex flex-col items-center text-center md:mb-16 ">
      <h2 className="flex flex-col">
        <span>{title}</span>{" "}
        <span className="text-accent-foreground">{titleHighlight}</span>
      </h2>
      <p>{titleDescription}</p>
    </div>
  );
};

export default SectionHeader;
