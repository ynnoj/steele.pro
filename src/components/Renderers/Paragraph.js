import React from 'react'

function Paragraph({ children, ...props }) {
  return (
    <p className="leading-relaxed mb-2" {...props}>
      {children}
    </p>
  )
}

export default Paragraph
