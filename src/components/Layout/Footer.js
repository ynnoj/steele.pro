import React from 'react'

import SocialLinks from '../SocialLinks'

function Footer() {
  return (
    <footer className="border-0 border-t-2 border-gray-200 border-solid px-4 py-6 md:py-8">
      <div className="flex items-center justify-center md:justify-end md:w-3/4 mx-auto">
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
