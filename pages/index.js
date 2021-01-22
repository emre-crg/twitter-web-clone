import React from 'react'

import useWindowSize from '../hooks/useWindowSize'
import CONST from '../constants/index'

import Layout from '../components/layout'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      {size.width > CONST.MOBILE_SIZE && (
        <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>
      )}
      <Main>{JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </Layout>
  )
}

export default HomePage
