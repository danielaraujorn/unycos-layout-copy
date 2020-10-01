import React, { ReactElement } from 'react'
import { Container, CheckboxInput, Checkmark } from './style'

export const Checkbox = ({
  label,
}: {
  label: ReactElement | string
}): ReactElement => {
  return (
    <Container>
      <label>
        {label}
        <CheckboxInput />
        <Checkmark />
      </label>
    </Container>
  )
}
