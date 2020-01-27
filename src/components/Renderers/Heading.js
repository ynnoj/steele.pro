import React from 'react'

function Heading({ children, ...props }) {
  return (
    <h1
      className="font-semibold leading-tight mb-4 md:text-5xl text-3xl"
      {...props}
    >
      {children}
    </h1>
  )
}

export default Heading
