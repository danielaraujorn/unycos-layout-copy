import styled from 'styled-components'
import { Section } from '../../components'

const BREAKPOINT = 767

export const Container = styled(Section)`
  background-color: #fff;
  min-height: 325px;
  @media (max-width: ${BREAKPOINT}px) {
    background-color: transparent;
    min-height: 100px;
  }
  display: flex;
  border-radius: 4px;
`

export const FocusedImage = styled.div<{ image: string }>`
  width: 100%;
  min-width: 50%;
  background-color: #858479;
  background: url(${({ image }) => image}) center no-repeat;
  background-size: cover;
  padding: 30px;
`
export const Content = styled.div`
  padding: 22px 30px;
  width: 100%;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 8px 0;
  }
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 30px;
    p {
      text-align: center;
      margin: 6px 0;
    }
  }
`

export const Title = styled.p`
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1d1a05;
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
    line-height: 20px;
    color: #fff;
  }
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #858479;
  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
    line-height: 16px;
  }
`

export const Spotlight = styled.div<{ selected: boolean }>`
  margin-right: 24px;
  width: 150px;
  margin-top: 10px;
  transition-duration: 100ms;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  &:hover {
    opacity: 0.8;
  }
`

export const Spotlights = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: auto;
  ${Title} {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 0;
  }
`

export const Image = styled.div<{ image: string }>`
  background-color: #858479;
  background: url(${({ image }) => image}) center no-repeat;
  background-size: cover;
  height: 80px;
  width: 150px;
  box-shadow: inset 0px 0px 1px #ffffff;
`
