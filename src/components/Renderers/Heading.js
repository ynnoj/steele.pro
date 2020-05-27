import React from 'react'

function Heading({ children, level, ...props }) {
  switch (level) {
    case 2:
      return (
        <h2
          className="leading-tight mb-8 md:text-xl text-gray-700 text-lg"
          {...props}
        >
          {children}
        </h2>
      )
    case 1:
    default:
      return (
        <h1
          className="font-semibold leading-tight mb-8 md:text-5xl text-3xl tracking-tight"
          {...props}
        >
          {children}
        </h1>
      )
  }
}

export default Heading
