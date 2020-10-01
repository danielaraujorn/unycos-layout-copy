import React, { ReactElement } from 'react'
import { Form, ButtonContainer } from './style'
import {
  Checkbox,
  ContainedButton,
  Input,
  Section,
  SectionTitle,
  Select,
} from '../../components'

export const Contact = (): ReactElement => {
  return (
    <Section>
      <SectionTitle>Obtén más información</SectionTitle>
      <Form>
        <Input required placeholder="Nombre completo" />
        <Input required placeholder="Correo electrónico" type="email" />
        <Select required defaultValue="">
          <option value="" disabled hidden>
            País / Código país
          </option>
          <option value="1">Brazil</option>
        </Select>
        <Input required placeholder="TeLéfono" type="tel" />
        <Checkbox
          label={
            <span>
              Acepto las <strong>condiciones de uso</strong> y
              <strong>protección de datos</strong>.
            </span>
          }
        />
        <Checkbox label="Me gustaría recibir información sobre nuevos cursos, ofertas y promociones" />
        <ButtonContainer>
          <ContainedButton type="submit">Enviar</ContainedButton>
        </ButtonContainer>
      </Form>
    </Section>
  )
}
