import React, { ReactElement } from 'react'
import {
  Container,
  Content,
  Class,
  Texts,
  Number,
  Title,
  Description,
  ButtonContainer,
} from './style'
import { Button, SectionTitle } from '../../components'

const CONTENTS = [
  {
    title: 'PRESENTACIÓN',
    description: `Mireia, nuestra campeona, te da la bienvenida al curso que te llevará 
      a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más 
      de la mano de un equipo de profesionales de fama internacional.
    `,
  },
  {
    title: 'NATACIÓN: ASPECTOS GENERALES',
    description: `Mireia es una luchadora. Su afán de superación y su preparación 
      tanto física como mental la han llevado a lo más alto en un deporte que para ella 
      es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios 
      de esta disciplina.
    `,
  },
  {
    title: 'BASES BIOMECÁNICAS DE LA NATACIÓN',
    description: `Mireia es una luchadora. Su afán de superación y su preparación tanto 
      física como mental la han llevado a lo más alto en un deporte que para ella es un 
      estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de 
      esta disciplina.`,
  },
  {
    title: 'ESTILOS DE NATACIÓN',
    description: `Una perfecta ejecución de estos estilos, unida al control y a la 
      resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y 
      su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.`,
  },
  {
    title: 'VIRAJES Y SALTOS',
    description: `El manejo de los saltos y virajes mejorará considerablemente tu 
      rendimiento y tu técnica de natación. Los profesionales de fama internacional que 
      asisten a Mireia te enseñan a perfeccionar esta técnica.`,
  },
]

export const LessonPlan = (): ReactElement => {
  return (
    <Container>
      <SectionTitle>Lesson plan</SectionTitle>
      <Content>
        {CONTENTS.map(({ title, description }, index) => (
          <Class key={title}>
            <Number>{index + 1}</Number>
            <Texts>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Texts>
          </Class>
        ))}
      </Content>
      <ButtonContainer>
        <Button invertedColors size="small">
          VER TODOS
        </Button>
      </ButtonContainer>
    </Container>
  )
}
