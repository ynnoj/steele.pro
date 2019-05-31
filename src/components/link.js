import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Link = styled.a`
  ${tw`border-0 border-b-2 border-gray-500 border-solid no-underline pb-1 relative text-black`}

  &:after {
    ${tw`absolute border-0 border-b-2 border-indigo-700 border-solid left-0 w-0`}
    content: '';
    transition: width 0.2s ease-in-out;
    bottom: calc(0px - 0.15rem);
  }

  &:hover:after,
  &:active:after {
    ${tw`w-full`}
  }
`

export default function(props) {
  return <Link {...props} />
}
