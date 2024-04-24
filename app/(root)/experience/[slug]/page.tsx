import Section from '@/components/shared/Section';
import React from 'react'

const Experience = ({
  params,
}: {
  params: { slug: string };
}) => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
      <h1>{params.slug}</h1>
    </Section>
  )
}

export default Experience