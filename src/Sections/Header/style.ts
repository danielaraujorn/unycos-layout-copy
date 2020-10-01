import styled from 'styled-components'
import logo from '../../assets/logo.svg'

export const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`

export const Logo = styled.img.attrs({ alt: 'Logo', src: logo })`
  height: 24px;
  margin: 8px;
`

export const Content = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
`

export const RightContent = styled(Content)`
  justify-content: flex-end;
`
