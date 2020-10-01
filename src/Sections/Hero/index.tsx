import React, { ReactElement } from 'react'
import { Container, BackgroundImage, ButtonContainer } from './style'
import { ContainedButton, Hidden } from '../../components'

export const Hero = (): ReactElement => {
  return (
    <Container>
      <BackgroundImage>
        <h1>Mireia Belmonte</h1>
        <h2>
          Enseña <strong>natacíon</strong>
        </h2>
      </BackgroundImage>
      <Hidden up="md">
        <ButtonContainer>
          <ContainedButton>Solicitar información</ContainedButton>
        </ButtonContainer>
      </Hidden>
    </Container>
  )
}
