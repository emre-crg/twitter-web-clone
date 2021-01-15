import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Merhaba</Button>

export const NavButton = () => <NavigationButton>Menu</NavigationButton>

export const Nav = () => <Navigation />
