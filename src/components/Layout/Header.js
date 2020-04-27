import React from 'react'

import Avatar from './Avatar'
import Nav from './Nav'

function Header() {
  return (
    <header className="border-b-2 border-gray-200 border-solid items-center py-6 md:py-8">
      <div className="flex items-center justify-between max-w-3xl mx-auto px-4">
        <Avatar />
        <Nav />
      </div>
    </header>
  )
}

export default Header
