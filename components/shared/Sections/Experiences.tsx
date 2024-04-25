import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Experiences = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <SectionHeader title="Choisissez votre" titleHighlight="expérience !" />
      <ul className="flex flex-col gap-x-4 gap-y-8 lg:flex-row">
        <li>
          <Link
            href="/experiences/horror"
            className="relative mx-auto text-white xl:text-white/0 xl:hover:text-white"
          >
            <Image
              src="/images/Experience1.jpg"
              alt="Paris"
              width={500}
              height={500}
              className="rounded-xl shadow-md shadow-gray-600"
            />
            <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase">
              Horror
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/experiences/thriller"
            className="relative mx-auto text-white xl:text-white/0 xl:hover:text-white"
          >
            <Image
              src="/images/Experience2.jpg"
              alt="Paris"
              width={500}
              height={500}
              className="rounded-xl shadow-md shadow-gray-600"
            />
            <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase">
              Thriller
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/experiences/night"
            className="relative mx-auto text-white xl:text-white/0 xl:hover:text-white"
          >
            <Image
              src="/images/Experience3.jpg"
              alt="Paris"
              width={500}
              height={500}
              className="rounded-xl shadow-md shadow-gray-600"
            />
            <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold uppercase">
              Night
            </span>
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default Experiences;
