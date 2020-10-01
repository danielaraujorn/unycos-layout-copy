import styled from 'styled-components'
import { Section, SectionTitle, Button } from '../../components'

export const Container = styled(Section).attrs({ center: true })`
  ${SectionTitle} {
    margin: auto;
    max-width: 350px;
  }
  ${Button} {
    margin-top: 36px;
  }
`
