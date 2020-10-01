import styled from 'styled-components'
import { Section } from '../../components'

export const Container = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 24px;
  img {
    height: 48px;
    width: 48px;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    img {
      height: 80px;
      width: 80px;
      margin-right: 16px;
    }
    p {
      font-size: 20px;
      line-height: 24px;
    }
  }
`
