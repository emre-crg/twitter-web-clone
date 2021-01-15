import React from 'react'

import Button from '../components/navigation-button'
import Navigation from '../components/navigation'

function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>

      <Navigation/>

      <Button>Merhaba</Button>
    </div>
  )
}

export default HomePage