import React, { useEffect, useState } from 'react'
import { globalHistory } from '@reach/router'
import classnames from 'classnames'

import Avatar from './Avatar'
import CloseIcon from '../svg/close.svg'
import MenuIcon from '../svg/menu.svg'
import Nav from './Nav'

function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen((open) => !open)

  const Icon = navOpen ? CloseIcon : MenuIcon

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setNavOpen(false)
    })
  }, [setNavOpen])

  return (
    <header className="border-b-2 border-gray-200 border-solid items-center py-6 md:py-8">
      <div className="md:flex items-center justify-between max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Avatar />
          <button className="focus:outline-none md:hidden" onClick={toggleNav}>
            <Icon
              className={classnames('h-6 w-6', {
                'text-gray-600': navOpen,
              })}
            />
          </button>
        </div>
        <Nav navOpen={navOpen} />
      </div>
    </header>
  )
}

export default Header
