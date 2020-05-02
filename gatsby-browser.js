import React from 'react'

import Layout from './src/components/Layout'
import { NavigationProvider } from './src/context/navigation'

import './src/styles/index.css'

export const wrapPageElement = ({ element, props }) => (
  <NavigationProvider>
    <Layout {...props}>{element}</Layout>
  </NavigationProvider>
)
