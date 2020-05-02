import React, { createContext, useContext, useState } from 'react'

const NavigationContext = createContext()

function NavigationProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false)

  const closeNav = () => setNavOpen(false)

  const toggleNav = () => setNavOpen((open) => !open)

  return (
    <NavigationContext.Provider value={{ closeNav, navOpen, toggleNav }}>
      {children}
    </NavigationContext.Provider>
  )
}

function useNavigation() {
  const context = useContext(NavigationContext)

  if (context === undefined)
    throw new Error('useNavigation must be used within an NavigationProvider')

  return context
}

export { NavigationProvider, useNavigation }
