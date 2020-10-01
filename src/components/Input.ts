import styled, { css } from 'styled-components'

export const DefaultInputStyle = css`
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 10px 16px;
  outline: none;
  border: none;
  margin: 8px;
  color: #000;
  text-transform: uppercase;
  width: 100%;
  max-width: 368px;
  min-width: 300px;
`

export const Input = styled.input`
  ${DefaultInputStyle}

  &::placeholder {
    color: #d8d7ce;
  }
`
