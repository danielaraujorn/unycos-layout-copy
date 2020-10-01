import styled from 'styled-components'
import menu from './assets/menu.svg'
import whatsapp from './assets/whatsapp.svg'
import logo from '../../../../assets/logo_black.svg'

export const Container = styled.div`
  margin: auto 0;
  @media (min-width: 768px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  outline: none;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin: 8px;
  background: url(${menu}) center no-repeat;
`

export const DrawerContent = styled.div`
  padding: 16px;
  padding-bottom: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Logo = styled.img.attrs({ alt: 'Logo', src: logo })`
  height: 24px;
  margin: 8px 0;
`

export const Presentation = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d8d7ce;
  p {
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #d8d7ce;
    strong {
      margin-left: 4px;
      color: #000;
    }
  }
`

export const Notifications = styled.div`
  height: 24px;
  width: 24px;
  margin-left: auto;
`

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
  padding: 0;
  width: 100%;
  list-style: none;
`

export const MenuItem = styled.li<{ selected?: boolean }>`
  cursor: pointer;
  margin: 6px 0;
  padding: 6px 0;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ selected }) => (selected ? '#C5AF19;' : '#858479')};
`

export const WhatsappContainer = styled.div`
  margin-top: auto;
  padding: 16px 0;
  width: 100%;
  border-top: 1px solid #f2ecc9;
  p {
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    color: #000;
  }
  span {
    font-weight: bold;
    margin-top: 8px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #858479;
    display: flex;
    align-items: center;
  }
`

export const WhatsappIcon = styled.img.attrs({
  alt: 'Whatsapp icon',
  src: whatsapp,
})`
  margin-right: 6px;
  margin-bottom: 2px;
  height: 12px;
`

export const AuthButton = styled.button`
  outline: none;
  border: none;
  border-top: 1px solid #f2ecc9;
  padding: 16px 0;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  color: #858479;
  background: transparent;
`
