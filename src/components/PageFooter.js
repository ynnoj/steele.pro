import React from 'react'
import tw from 'tailwind.macro'

const Footer = tw.footer`border-0 border-t-2 border-gray-200 border-solid flex flex-col md:flex-row items-center justify-center md:justify-end mt-6 md:mt-8 py-6 md:py-8`

function PageFooter({ children }) {
  return <Footer>{children}</Footer>
}

export default PageFooter
