import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Choisissez votre" titleHighlight="expérience !" />
      <ul className="flex flex-col gap-y-8 lg:flex-row gap-x-4">
        <Link href="/experience/horror" className="text-white md:text-white/0 md:hover:text-white">
          <li className="mx-auto relative ">
            <Image
              src="/images/Experience1.jpg"
              alt="Paris"
              width={500}
              height={500}
            />
            <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-bold text-3xl">
              Horror
            </span>
          </li>
        </Link>
        <Link href="/experience/thriller" className="text-white md:text-white/0 md:hover:text-white">
          <li className="mx-auto relative ">
            <Image
              src="/images/Experience2.jpg"
              alt="Paris"
              width={500}
              height={500}
            />
            <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-bold text-3xl">
              Thriller
            </span>
          </li>
        </Link>
        <Link href="/experience/night" className="text-white md:text-white/0 md:hover:text-white">
          <li className="mx-auto relative ">
            <Image
              src="/images/Experience3.jpg"
              alt="Paris"
              width={500}
              height={500}
            />
            <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-bold text-3xl">
              Night
            </span>
          </li>
        </Link>
      </ul>
    </Section>
  );
};

export default Experiences;
