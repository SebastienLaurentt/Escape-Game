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
    <div className="mb-12 text-center md:mb-16 md:text-left ">
      <h2>
        {title} <span className="text-accent-foreground">{titleHighlight}</span>
      </h2>
      <p>{titleDescription}</p>
    </div>
  );
};

export default SectionHeader;
