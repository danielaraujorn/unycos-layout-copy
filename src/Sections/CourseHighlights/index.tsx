import React, { ReactElement } from 'react'
import { List, Item, Number, Title, RightButton } from './style'
import { Button, Section, SectionTitle } from '../../components'
import { Message } from './subcomponents'

const ITEMS = [
  { number: '03', title: 'Bases biomecánicas de la natación' },
  { number: '06', title: 'Preparación física' },
  { number: '08', title: 'Nutrición y suplementos' },
  { number: '11', title: 'Análisis de competición' },
]

export const CourseHighlights = (): ReactElement => {
  return (
    <Section center>
      <SectionTitle>Destaques del curso</SectionTitle>
      <List>
        {ITEMS.map(({ number, title }) => (
          <Item key={title}>
            <Number>{number}</Number>
            <Title>{title}</Title>
            <RightButton href="/" />
          </Item>
        ))}
      </List>
      <Button>Ver programa completo</Button>
      <Message />
    </Section>
  )
}
