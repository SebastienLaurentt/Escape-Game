import ExperienceLongerCard from "@/components/shared/ExperienceLongerCard";
import PageTitle from "@/components/shared/PageTitle";
import Section from "@/components/shared/Section";
import HorrorImg from "../../../public/images/Experience1.jpg";

const Experiences = () => {
  return (
    <>
      <PageTitle title="Choisissez votre expérience" />
      <Section marginBottom={true} marginTop={true} classname="">
        <ul className="flex flex-col lg:flex-row lg:gap-x-4">
          <li>
            <ExperienceLongerCard
              src={HorrorImg}
              alt="Logo de l'expérience Horror"
              name="Horror"
              description="lorem00000"
              peopleNumber="4-6"
              duration="1"
              price="40"
            />
          </li>
          <li>
            <ExperienceLongerCard
              src={HorrorImg}
              alt="Logo de l'expérience Horror"
              name="Horror"
              description="lorem00000"
              peopleNumber="4-6"
              duration="1"
              price="40"
            />
          </li>
          <li>
            <ExperienceLongerCard
              src={HorrorImg}
              alt="Logo de l'expérience Horror"
              name="Horror"
              description="lorem00000"
              peopleNumber="4-6"
              duration="1"
              price="40"
            />
          </li>
        </ul>
      </Section>
    </>
  );
};

export default Experiences;
