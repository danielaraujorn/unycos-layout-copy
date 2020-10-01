import styled, { css } from 'styled-components'

export const Container = styled.div<{ image?: string }>`
  background-color: #858479;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ image }) =>
    !!image &&
    css`
      background: url(${image}) center no-repeat;
      background-size: cover;
    `}

  &:before {
    float: left;
    content: '';
    padding-top: 100%;
  }
  span {
    position: absolute;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #000000;
  }
`
