import React from 'react'
import classnames from 'classnames'

function Subtitle({ children, className }) {
  return (
    <p
      className={classnames(
        'font-light leading-relaxed md:text-2xl text-xl text-gray-700',
        className
      )}
    >
      {children}
    </p>
  )
}

export default Subtitle
