import React, { ReactElement } from 'react'
import { Cards, Card, Title, Subject } from './style'
import marcusImage from './assets/01.jpg'
import ismaelImage from './assets/02.jpg'
import lewisLandscapeImage from './assets/03.jpg'
import lewisPortraitImage from './assets/04.jpg'
import {
  MaxWidthContainer,
  SectionTitle,
  Hidden,
  Section,
} from '../../components'

export const MoreCourses = (): ReactElement => {
  return (
    <MaxWidthContainer>
      <Section>
        <SectionTitle>Más cursos</SectionTitle>
        <Cards>
          <Card lanscapeImage={marcusImage}>
            <Title>Marcus Cooper</Title>
            <Subject>
              Enseña <strong>Piragüismo</strong>
            </Subject>
          </Card>
          <Hidden down="lg">
            <Card lanscapeImage={ismaelImage}>
              <Title>Ismael Cala</Title>
              <Subject>
                Enseña <strong>Desarrollo personal</strong>
              </Subject>
            </Card>
          </Hidden>
          <Card
            lanscapeImage={lewisLandscapeImage}
            portraitImage={lewisPortraitImage}
          >
            <Title>Lewis Amarante</Title>
            <Subject>
              Enseña <strong>Maquillage</strong>
            </Subject>
          </Card>
        </Cards>
      </Section>
    </MaxWidthContainer>
  )
}
