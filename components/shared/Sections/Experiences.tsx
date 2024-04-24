import React from 'react'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Image from 'next/image'

const Experiences = () => {
  return (
    <Section marginBottom={true} marginTop={true} classname="">
        <SectionHeader
          title="Choissisez votre"
          titleHighlight="expérience"
        />
    <ul className='flex flex-col gap-y-8'>
      <li>
        <Image src="/images/Experience1.jpg" alt="Paris" width={500} height={500} />
      </li>
      <li>
        <Image src="/images/Experience1.jpg" alt="Paris" width={500} height={500} />
      </li>
      <li>
        <Image src="/images/Experience1.jpg" alt="Paris" width={500} height={500} />
      </li>
    </ul>
    </Section>
  )
}

export default Experiences