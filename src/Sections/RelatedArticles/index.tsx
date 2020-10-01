import React, { ReactElement } from 'react'
import { Container, Articles } from './style'
import { SectionTitle, Button } from '../../components'

const ARTICLES = [
  { title: 'Consejos para nadadores principiantes', date: '22.06.2019' },
  {
    title: 'Recomendaciones para lograr que un niño venza el miedo al agua',
    date: '22.06.2019',
  },
  { title: '¿Nadar es un buen método para adelgazar?', date: '22.06.2019' },
  {
    title: 'Consejos para mejorar la técnica del estilo crol',
    date: '22.06.2019',
  },
]

export const RelatedArticles = (): ReactElement => {
  return (
    <Container>
      <SectionTitle>Artículos relacionados</SectionTitle>
      <Articles>
        {ARTICLES.map(({ title, date }) => (
          <li key={title}>
            <p>{title}</p>
            <p>{date}</p>
          </li>
        ))}
      </Articles>
      <Button size="small">leer más en nuestro blog</Button>
    </Container>
  )
}
