import React from 'react'
import cn from 'classnames'

import useWindowSize from '../hooks/useWindowSize'
import styles from './layout.module.css'
import CONST from '../constants/index'

import Sidebar from './col-sidebar'
import Main from './col-main'
import Extra from './col-extra'


function Layout({ children }) {
  const size = useWindowSize()

  return (
    <div className={cn(styles.layout)}>
      
      {size.width > CONST.MOBILE_SIZE && (
        <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>
      )}
      
      <Main>{children}</Main>
      
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
      
    </div>
  )
}

export default Layout
