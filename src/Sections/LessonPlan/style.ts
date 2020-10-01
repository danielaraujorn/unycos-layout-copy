import styled from 'styled-components'
import { Section } from '../../components'

export const Container = styled(Section)`
  max-width: 944px;
  width: 100%;
`

export const Content = styled.div`
  background: #f6f4ef;
  max-height: 720px;
  padding-bottom: 100px;
  overflow-y: auto;
`

export const Class = styled.div`
  display: flex;
  &:not(:last-of-type) {
    border-bottom: 1px solid #d8d7ce;
  }
  padding: 24px;
`

export const Number = styled.p`
  width: 80px;
  min-height: 112px;
  font-size: 36px;
  line-height: 40px;
  color: #858479;
  text-align: right;
  letter-spacing: 2px;
  margin: 0;
`

export const Texts = styled.div`
  margin-left: 16px;
`

export const Title = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin: 6px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
`

export const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
  line-height: 24px;
  color: #858479;
`

export const ButtonContainer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: -100px;
  position: relative;
  background: linear-gradient(
    360deg,
    #f6f4ef 38.89%,
    rgba(246, 244, 239, 0.5) 100%
  );
  display: flex;
  & > button {
    margin: auto;
  }
`
