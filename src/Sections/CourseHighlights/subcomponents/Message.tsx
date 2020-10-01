import React, { ReactElement } from 'react'
import { Container, Head, Subtitle } from './style'
import star from './assets/star.svg'

export const Message = (): ReactElement => {
  return (
    <Container>
      <Head>
        <img src={star} alt="star" />
        <p>
          Los estudiantes le dan a Unycos una calificación promedio de 4.7 de 5
          estrellas.
        </p>
      </Head>
      <Subtitle>
        100% de garantía de satisfacción. 30 días de garantía de devolución de
        dinero.
      </Subtitle>
    </Container>
  )
}
