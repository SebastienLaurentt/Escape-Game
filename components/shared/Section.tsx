interface SectionProps {
  id?: string;
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "mb-32 md:mb-36 xl:mb-48" : "";
  const isMarginTop = marginTop ? "mt-20 md:mt-24 xl:mt-28" : "";

  return (
    <section
    id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} px-6 md:px-10 xl:mx-auto xl:px-16  2xl:max-w-[1600px]`}
    >
      {children}
    </section>
  );
};

export default Section;
