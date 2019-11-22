import React from 'react'

function About({ children }) {
  return (
    <section className="mb-6">
      <React.Fragment>
        <h2 className="mb-6 mt-0 text-2xl md:text-3xl">About</h2>
        {children}
      </React.Fragment>
    </section>
  )
}

export default About
