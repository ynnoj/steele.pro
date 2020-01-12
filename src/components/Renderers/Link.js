import React from 'react'

function Link({ children, ...props }) {
  return (
    <a className="font-medium underline" {...props}>
      {children}
    </a>
  )
}

export default Link
