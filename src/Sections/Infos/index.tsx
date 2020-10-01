import React, { ReactElement } from 'react'
import { Container, Info } from './style'
import book from './assets/book.svg'
import film from './assets/film.svg'
import { ContainedButton, Hidden, MaxWidthContainer } from '../../components'

const INFOS = [
  { image: book, alt: 'book icon', title: '12 módulos' },
  { image: film, alt: 'film icon', title: '+3,5 horas' },
]

export const Infos = (): ReactElement => {
  return (
    <MaxWidthContainer>
      <Container>
        {INFOS.map(({ image, alt, title }) => (
          <Info key={title}>
            <img src={image} alt={alt} />
            <p>{title}</p>
          </Info>
        ))}

        <Hidden down="md">
          <ContainedButton>Mas información</ContainedButton>
        </Hidden>
      </Container>
    </MaxWidthContainer>
  )
}
