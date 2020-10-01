import styled, { css } from 'styled-components'

export const Section = styled.div<{ center?: boolean }>`
  margin: 40px auto;
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`
