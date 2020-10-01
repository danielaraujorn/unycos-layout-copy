import styled, { css } from 'styled-components'

export const DrawerPaper = styled.div`
  height: 100vh;
  z-index: 300;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  right: 0;
  position: fixed;
`

export const Container = styled.div<{ open: boolean; width?: number }>`
  z-index: 301;
  height: 100vh;
  width: 100vw;
  left: 0;
  position: fixed;
  transform: translate(100vw);
  ${({ open }) =>
    !!open &&
    css`
      transform: translate(0);
    `}
  background-color: #0008;
  ${DrawerPaper} {
    width: ${({ width = 240 }) => width}px;
    transform: translate(${({ width = 240 }) => width}px);
    ${({ open }) =>
      !!open &&
      css`
        transform: translate(0);
      `}
  }
`
