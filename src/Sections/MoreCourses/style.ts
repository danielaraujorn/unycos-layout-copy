import styled, { css } from 'styled-components'

const MAX_BREAKPOINT = 767

export const Card = styled.li<{
  lanscapeImage: string
  portraitImage?: string
}>`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 51.04%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${({ lanscapeImage }) => lanscapeImage});
  opacity: 0.5;
  transition-duration: 100ms;
  @media (max-width: ${MAX_BREAKPOINT}px) {
    opacity: 1;
    ${({ portraitImage }) =>
      !!portraitImage &&
      css`
        background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 51.04%,
            rgba(0, 0, 0, 0.9) 100%
          ),
          url(${portraitImage});
      `}
  }
  &:hover {
    opacity: 1;
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 1;
  height: auto;
  margin: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  &:before {
    float: left;
    content: '';
    padding-top: 50%;
  }
`
export const Title = styled.p`
  line-height: 24px;
  font-size: 20px;
  @media (max-width: ${MAX_BREAKPOINT}px) {
    font-size: 16px;
    line-height: 20px;
  }
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`
export const Subject = styled.p`
  font-size: 16px;
  line-height: 20px;
  @media (max-width: ${MAX_BREAKPOINT}px) {
    font-size: 11px;
    line-height: 16px;
  }
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  color: #858479;
  strong {
    font-weight: initial;
  }
`

export const Cards = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  margin: 0;
  @media (max-width: 600px) {
    flex-direction: column;
    ${Card} {
      width: 100%;
    }
  }
`
