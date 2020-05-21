import React from 'react'

import Layout from './src/components/Layout'

import './src/styles/index.css'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
