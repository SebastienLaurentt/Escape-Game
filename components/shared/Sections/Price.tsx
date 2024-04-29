import PriceCard from "../PriceCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Price = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Des tarifs" titleHighlight="dégressifs" />
      <ul className="flex flex-col items-center justify-center gap-y-4 md:gap-y-6 xl:flex-row xl:gap-x-6">
        <div className="flex flex-col  gap-y-4 md:flex-row md:gap-x-6 ">
          <li>
            <PriceCard peopleNumber="1 à 2 personnes" price="40€" />
          </li>
          <li>
            <PriceCard peopleNumber="3 à 4 personnes" price="35€" />
          </li>
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-6 ">
          <li>
            <PriceCard peopleNumber="5 à 6 personnes" price="30€" />
          </li>
          <li>
            <PriceCard peopleNumber="6 à 7 personnes" price="25€" />
          </li>
        </div>
      </ul>
    </Section>
  );
};

export default Price;
