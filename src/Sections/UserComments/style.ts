import styled from 'styled-components'

export const Cards = styled.div`
  overflow-x: auto;
  width: 100%;
  display: flex;
  padding: 4px;
`

export const Card = styled.div`
  margin: 4px;
  padding: 8px;
  background-color: #ffffff;
  border-radius: 4px;
  min-width: 275px;
  width: 50%;
  max-width: 400px;
  p {
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    margin: 0;
  }
`

export const Author = styled.p`
  text-align: right;
  color: #000;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`
