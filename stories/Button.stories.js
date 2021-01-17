import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import ThemeButton from '../components/theme-button.module'
import Stack from '../components/stack'
import Navigation from '../components/navigation'
import TitleBold from '../components/text-title'
import { Home } from '../components/icons'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Merhaba</Button>

export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>Save Big Button</ThemeButton>
  </Stack>
)

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
