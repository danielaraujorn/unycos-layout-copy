import styled from 'styled-components'
import { Section } from '../../components'

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Articles = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 750px;
  li {
    width: 100%;
    max-width: 350px;
    padding: 10px 8px;
    &:nth-last-of-type(n + 3) {
      border-bottom: 1px solid #1d1a05;
    }
    @media (max-width: 699px) {
      &:last-of-type {
        border-bottom: 1px solid #1d1a05;
      }
    }
  }
  p {
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    margin: 2px;
    &:last-child {
      color: #858479;
    }
  }
`
