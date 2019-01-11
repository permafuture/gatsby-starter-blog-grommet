import { Box, Grommet } from 'grommet'
import { createGlobalStyle } from 'styled-components'
import { dark, grommet, hpe } from 'grommet/themes'
import React from 'react'

import siteConfig from '../../site-config'

import { siteTheme } from '../site-theme'

import CardProfile from './CardProfile'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700');
  img {
    /* border-radius: 14px; */
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a:hover {
    opacity: 0.9;
  }
`

const THEMES = {
  grommet,
  hpe,
  dark
}

export default props => {
  return (
    <Grommet theme={THEMES[siteConfig.theme || 'grommet']}>
      <Grommet theme={siteTheme}>
        <GlobalStyle />
        <Box direction='column' align='center'>
          <Box width='xlarge'>
            <SiteHeader />
            <main>
              <Box direction='row-responsive'  alignContents='end'>
              <Box>
                <aside>
                  <CardProfile />
                </aside>
              </Box>
              <Box basis='medium' flex='grow' direction='row-responsive'>
                  {props.children}
                </Box>

              </Box>
            </main>
          </Box>
        </Box>
        <SiteFooter />
      </Grommet>
    </Grommet>
  )
}
