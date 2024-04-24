interface SectionProps {
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  children: React.ReactNode;
}

const Section = ({
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "mb-32 md:mb-36 xl:mb-48" : "";
  const isMarginTop = marginTop ? "mt-20 md:mt-24 xl:mt-28" : "";

  return (
    <section
      className={`${classname} ${isMarginBottom} ${isMarginTop} px-6 md:px-10 xl:mx-auto xl:max-w-screen-xl xl:px-16`}
    >
      {children}
    </section>
  );
};

export default Section;
