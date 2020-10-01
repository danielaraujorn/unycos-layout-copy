import React, { ReactElement, useState, useCallback } from 'react'
import useAxios from 'axios-hooks'
import {
  Container,
  FocusedImage,
  Content,
  Title,
  Description,
  Spotlights,
  Spotlight,
  Image,
} from './style'
import { MaxWidthContainer, Hidden } from '../../components'

export const Slide = (): ReactElement => {
  const [focusedSpotlightIndex, setFocusedSpotlightIndex] = useState(0)

  const setFocusedSpotlight = useCallback(
    (index) => () => setFocusedSpotlightIndex(index),
    [setFocusedSpotlightIndex],
  )

  const [{ data = { spotlights: [] } }] = useAxios<{
    spotlights: Array<{
      _id: string
      title: string
      description: string
      image: string
    }>
  }>({
    url: 'https://api.beta.unycos.com/u/courses/spotlights/natacion ',
    headers: {
      'x-mejor-key': 'unycos',
    },
  })

  const { spotlights = [] } = data

  const focusedSpotlight = spotlights[focusedSpotlightIndex] || {}

  return (
    <MaxWidthContainer>
      <Container>
        <Hidden down="md">
          <FocusedImage
            image={focusedSpotlight.image}
            title={focusedSpotlight.title}
          />
        </Hidden>
        <Content>
          <Title>{focusedSpotlight.title}</Title>
          <Description>{focusedSpotlight.description}</Description>
          <Spotlights>
            {spotlights.map(({ _id, image, title }, index) => (
              <Spotlight
                key={_id}
                selected={index === focusedSpotlightIndex}
                title={title}
                onClick={setFocusedSpotlight(index)}
              >
                <Image image={image} />
                <Title>{title}</Title>
              </Spotlight>
            ))}
          </Spotlights>
        </Content>
      </Container>
    </MaxWidthContainer>
  )
}
