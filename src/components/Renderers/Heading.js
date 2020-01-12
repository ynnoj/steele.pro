import React from 'react'

function Heading({ children, ...props }) {
  return (
    <h1 className="font-semibold mb-2 text-4xl md:text-5xl" {...props}>
      {children}
    </h1>
  )
}

export default Heading
