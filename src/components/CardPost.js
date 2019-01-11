import { Box, Heading, Text, Image } from 'grommet'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import siteConfig from '../../site-config'

// Target another styled component on hover
// https://www.styled-components.com/docs/advanced#referring-to-other-components
// Psuedoelements, psuedoselectors, and nesting
// https://www.styled-components.com/docs/basics#psuedoelements-psuedoselectors-and-nesting
const CardHover = styled.div`
  :hover {
    opacity: 0.8;
  }
`
const brandCo = siteConfig.brandColor;

export default props => {
  return (
    <article>
      <CardHover>
        <Link
          to={props.link}
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: brandCo
          }}
        >
          <Box
            round='false'
            elevation='small'
            border={{
              side: 'all',
              color: 'border',
              size: 'xsmall'
            }}
            margin={{
              top: 'small',
              bottom: 'medium',
              right: 'small',
              left: 'small'
            }}
          >
            {props.cover < 1 ? (
              <div />
            ) : (
              <div>
                <Box round={{ size: 'false', corner: 'top' }} overflow='hidden'>
                  <Box height='small' background='border'>
                    <Image src={props.cover} fit='cover' />
                  </Box>
                </Box>
              </div>
            )}

            <Box pad='medium'>
              <Heading margin={{ vertical: 'small' }} level='2'>
                {props.title}
              </Heading>
              <Text dangerouslySetInnerHTML={props.htmlExcerpt} />
              <Text margin={{ top: 'small' }} size='small'>
                {props.date}
              </Text>
            </Box>
          </Box>
        </Link>
      </CardHover>
    </article>
  )
}
