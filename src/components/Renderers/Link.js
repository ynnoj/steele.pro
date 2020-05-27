import React from 'react'

function Link({ children, ...props }) {
  return (
    <a className="font-medium text-orange-600 hover:underline" {...props}>
      {children}
    </a>
  )
}

export default Link
