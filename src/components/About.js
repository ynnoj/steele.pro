import React from 'react'
import tw from 'tailwind.macro'

const Section = tw.section`mb-6`
const Title = tw.h2`mb-6 mt-0 text-2xl md:text-3xl`

function About({ children }) {
  return (
    <Section>
      <React.Fragment>
        <Title>About</Title>
        {children}
      </React.Fragment>
    </Section>
  )
}

export default About
