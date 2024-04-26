import ExperienceLongerCard from "@/components/shared/ExperienceLongerCard";
import PageTitle from "@/components/shared/PageTitle";
import Section from "@/components/shared/Section";
import HorrorImg from "../../../public/images/Experience1.jpg";
import ThrillerImg from "../../../public/images/Experience2.jpg";
import NightImg from "../../../public/images/Experience3.jpg";

const Experiences = () => {
  return (
    <main>
      <PageTitle title="I. Choisissez votre expérience" />
      <Section marginBottom={true} marginTop={false} classname="">
        <ul className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 xl:px-28">
          <li>
            <ExperienceLongerCard
              src={HorrorImg}
              alt="Logo de l'expérience Horror"
              name="Horror"
              description="Plongez dans les ténèbres, résolvez les énigmes terrifiantes et échappez aux griffes du mal dans cette expérience d'épouvante."
              peopleNumber="4-6"
              duration="1"
              price="40"
            />
          </li>
          <li>
            <ExperienceLongerCard
              src={ThrillerImg}
              alt="Logo de l'expérience Thriller"
              name="Thriller"
              description="Vivez une montée d'adrénaline palpitante alors que vous explorez des mystères sombres et des secrets sinistres."
              peopleNumber="4-6"
              duration="1"
              price="40"
            />
          </li>
          <li>
            <ExperienceLongerCard
              src={NightImg}
              alt="Logo de l'expérience Night"
              name="Night"
              description="Soyez prêt à affronter vos pires cauchemars et à découvrir ce qui se cache dans l'obscurité de cette aventure nocturne."
              peopleNumber="4-6"
              duration="1"
              price="40"
            />
          </li>
        </ul>
      </Section>
    </main>
  );
};

export default Experiences;
