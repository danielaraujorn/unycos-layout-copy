import React, { ReactElement } from 'react'
import { Container, Items } from './style'
import book from './assets/book.svg'
import videos from './assets/360.svg'
import tests from './assets/tests.svg'
import tasks from './assets/tasks.svg'
import { SectionTitle, Hidden, ContainedButton } from '../../components'

const CONTENTS = [
  { image: book, title: 'E-books' },
  { image: videos, title: '360º Videos' },
  { image: tests, title: 'Tests' },
  { image: tasks, title: 'Tareas' },
]

export const ExclusiveContent = (): ReactElement => {
  return (
    <Container center>
      <Hidden down="md">
        <SectionTitle>Contenido exclusivo</SectionTitle>
      </Hidden>
      <Items>
        {CONTENTS.map(({ image, title }) => (
          <div key={title}>
            <img src={image} alt="books" />
            <p>{title}</p>
          </div>
        ))}
      </Items>
      <Hidden down="md">
        <ContainedButton>Mas información</ContainedButton>
      </Hidden>
    </Container>
  )
}
