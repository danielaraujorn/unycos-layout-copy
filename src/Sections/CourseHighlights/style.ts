import styled from 'styled-components'
import right from './assets/right.svg'

export const List = styled.ul`
  padding: 8px;
  padding-top: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Item = styled.li`
  display: flex;
  width: 100%;
  max-width: 450px;
  align-items: center;
  padding: 12px 8px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #1d1a05;
  }
`

export const Number = styled.span`
  margin-right: 10px;
  color: #d8d7ce;
  font-size: 16px;
  line-height: 20px;
`

export const Title = styled.p`
  margin: 0;
  color: #858479;
  font-size: 14px;
  line-height: 16px;
`

export const RightButton = styled.a`
  margin-left: auto;
  height: 24px;
  width: 24px;
  background: url(${right}) center no-repeat;
`
