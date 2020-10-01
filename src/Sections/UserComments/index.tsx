import React, { ReactElement } from 'react'
import { Cards, Card, Author } from './style'
import { SectionTitle, Section } from '../../components'

const COMMENTS = [
  {
    comment: `Ha sido un curso muy gratificante,en el que he podido aprender 
      muchas cosas gracias a los grandes ponentes que han colaborado y aportado 
      sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica 
      todo lo aprendido. Estoy muy orgulloso.`,
    author: 'Samuel F.',
  },
  {
    comment: `Seguir creciendo como profesional es necesario pero si lo haces 
      junto a tus ídolos se convierte en un placer. Gracias por esta experiencia 
      y espero poder comentarlo en persona con sus protagonistas muy pronto.`,
    author: 'Francisco S.',
  },
]

export const UserComments = (): ReactElement => {
  return (
    <Section>
      <SectionTitle>Comentários de Usuários</SectionTitle>
      <Cards>
        {COMMENTS.map(({ comment, author }) => (
          <Card key={author}>
            <p>{comment}</p>
            <Author>{author}</Author>
          </Card>
        ))}
      </Cards>
    </Section>
  )
}
