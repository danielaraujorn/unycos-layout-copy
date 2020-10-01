import React, { ReactElement } from 'react'
import { Container } from './style'

export const Avatar = ({
  image,
  nameAbbreviation,
}: {
  image?: string
  nameAbbreviation: string
}): ReactElement => {
  return (
    <Container image={image}>
      {!image && <span>{nameAbbreviation}</span>}
    </Container>
  )
}
