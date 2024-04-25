import Section from '@/components/shared/Section';
import React from 'react'
import experienceData from "@/data/experienceData";


type ExperienceData = {
  name: string;
  description: string;
};

const Experience = ({
  params,
}: {
  params: { slug: string };
}) => {

  const slug = params.slug;
  const experience = experienceData[
    slug as keyof typeof experienceData
  ] as ExperienceData;


  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <h1>{experience.name}</h1>
      <span>{experience.description}</span>
    </Section>
  )
}

export default Experience