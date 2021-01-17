import React from 'react'

import TextTitle from '../components/text-title'

export default {
  title: 'Typeography'
}

export const Title = () => (
  <div>
    <TextTitle bold={false}>Hello World</TextTitle>
    <TextTitle>Hello World</TextTitle>
  </div>
)