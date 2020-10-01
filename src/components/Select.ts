import styled from 'styled-components'
import { DefaultInputStyle } from './Input'

export const Select = styled.select`
  ${DefaultInputStyle}

  option {
    color: #000;
  }
  &:invalid {
    color: #d8d7ce;
  }
`
