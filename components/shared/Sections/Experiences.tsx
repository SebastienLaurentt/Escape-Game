import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Choisissez votre" titleHighlight="expérience !" />
      <ul className="flex flex-col gap-x-4 gap-y-8 lg:flex-row">
        <Link
          href="/experience/horror"
          className="mx-auto text-white lg:text-white/0 lg:hover:text-white"
        >
          <li className=" relative">
            <Image
              src="/images/Experience1.jpg"
              alt="Paris"
              width={500}
              height={500}
            />
            <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase">
              Horror
            </span>
          </li>
        </Link>
        <Link
          href="/experience/thriller"
          className="mx-auto text-white lg:text-white/0 lg:hover:text-white"
        >
          <li className="relative">
            <Image
              src="/images/Experience2.jpg"
              alt="Paris"
              width={500}
              height={500}
            />
            <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase">
              Thriller
            </span>
          </li>
        </Link>
        <Link
          href="/experience/night"
          className="mx-auto text-white lg:text-white/0 lg:hover:text-white"
        >
          <li className="relative">
            <Image
              src="/images/Experience3.jpg"
              alt="Paris"
              width={500}
              height={500}
            />
            <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase">
              Night
            </span>
          </li>
        </Link>
      </ul>
    </Section>
  );
};

export default Experiences;
