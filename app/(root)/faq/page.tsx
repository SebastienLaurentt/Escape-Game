import PageTitle from '@/components/shared/PageTitle'
import Section from '@/components/shared/Section'
import Faq from '@/components/shared/Sections/Faq'
import React from 'react'

const FAQ = () => {
  return (
    <main>
      <Section marginBottom={true} marginTop={true}>
        <PageTitle title="Foire Aux Questions" />
        <Faq />
      </Section>
    </main>
  )
}

export default FAQ