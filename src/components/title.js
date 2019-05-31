import React from 'react'
import tw from 'tailwind.macro'

const Title = tw.h1`mb-2 mt-4 text-4xl`

export default function(props) {
  return <Title {...props} />
}
