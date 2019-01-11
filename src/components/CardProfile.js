import { Box, Button, Image, Markdown, Text, Heading } from 'grommet'
import { Github, Reddit, Twitter } from 'grommet-icons'
import React from 'react'

import siteConfig from '../../site-config'

export default () => (
  <Box direction='row' justify='end'>
    <Box
      round='small'
      pad='medium'
      margin='small'
      wrap
      overflow='hidden'
      width='medium'
      alignSelf='end'
    >
      <Box direction='row-responsive'>
        <Box
          margin='small'
          round='full'
          overflow='hidden'
        >
          <Image
            fit='cover'
            title={siteConfig.author}
            alt={siteConfig.author}
            src={siteConfig.authorImage}
          />
        </Box>
      </Box>
      <Box margin='medium'>
        <Text
        weight='bold'
        size='large'
        textAlign='end'>
          {siteConfig.authorTag}
        </Text>
      </Box>
      <Box overflow='hidden'>
        <Text size='small' textAlign='end'>
          <Markdown>{siteConfig.authorBio}</Markdown>
        </Text>
      </Box>
      <Box alignSelf='end' direction='row' wrap>
  {siteConfig.social.twitter.length > 1 ? (
    <Button
      href={`https://twitter.com/${siteConfig.social.twitter}`}
      icon={<Twitter size='medium' />}
    />
  ) : (
    ''
  )}

  {siteConfig.social.github.length > 1 ? (
    <Button
      href={`https://github.com/${siteConfig.social.github}`}
      icon={<Github size='medium' />}
    />
  ) : (
    ''
  )}

  {siteConfig.social.reddit.length > 1 ? (
    <Button
      href={`https://reddit.com/user/${siteConfig.social.reddit}`}
      icon={<Reddit size='medium' />}
    />
  ) : (
    ''
  )}
</Box>
    </Box>
  </Box>
)
