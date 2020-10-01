import styled from 'styled-components'
import { Section } from '../../components'

export const Container = styled(Section)`
  button {
    margin-top: 30px;
  }
`
export const Items = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
    img {
      margin-bottom: 10px;
      height: 60px;
    }
    p {
      font-size: 20px;
      line-height: 24px;
      margin: 10px 4px;
      text-transform: uppercase;
    }
    @media (max-width: 600px) {
      img {
        margin-bottom: 10px;
        height: 32px;
      }
      p {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
`
