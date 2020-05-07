import React, { createContext, useContext, useEffect, useState } from 'react'
import { globalHistory } from '@reach/router'

const NavigationContext = createContext()

function NavigationProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen((open) => !open)

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setNavOpen(false)
    })
  }, [setNavOpen])

  return (
    <NavigationContext.Provider value={{ navOpen, toggleNav }}>
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
