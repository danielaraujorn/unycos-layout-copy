import React, { ReactElement } from 'react'
import { Container } from './style'
import { SectionTitle, Button } from '../../components'

export const Faq = (): ReactElement => {
  return (
    <Container>
      <SectionTitle>Aprende natación con una campeona olímpica</SectionTitle>
      <Button>Preguntas Frecuentes</Button>
    </Container>
  )
}
