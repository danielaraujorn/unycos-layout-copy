import styled from 'styled-components'

export const Container = styled.div`
  margin: 24px auto;
  width: 290px;
  p {
    margin: 5px 0;
    text-align: left;
  }
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 38px;
    width: 38px;
    margin-right: 20px;
  }
  p {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }
`

export const Subtitle = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #858479;
`
