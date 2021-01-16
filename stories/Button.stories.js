import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import TitleBold from '../components/title-bold'
import { Home } from '../components/icons'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Merhaba</Button>

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
