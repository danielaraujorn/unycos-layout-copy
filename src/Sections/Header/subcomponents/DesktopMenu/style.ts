import styled from 'styled-components'
import chevronDown from './assets/chevron_down.svg'

export const Container = styled.div`
  margin: auto 0;
  @media (max-width: 767px) {
    display: none;
  }
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 16px;
`

export const NavbarItem = styled.li`
  margin: 0 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  color: #858479;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: #b1b0a2;
  }
  strong {
    color: #fff;
  }
`

export const ChevronDown = styled.div`
  width: 24px;
  height: 24px;
  background: url(${chevronDown}) center no-repeat;
`

export const PopoverPaper = styled.div`
  width: 200px;
  margin-top: 8px;
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
`

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-top: 2px;
  list-style: none;
`

export const MenuItem = styled.li<{ selected?: boolean }>`
  cursor: pointer;
  margin: 4px;
  padding: 4px 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
  color: ${({ selected }) => (selected ? '#C5AF19;' : '#858479')};
`

export const LogoutButton = styled.button`
  outline: none;
  border: none;
  border-top: 1px solid #f2ecc9;
  padding: 10px 16px;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: right;
  text-transform: uppercase;
  color: #858479;
  background: transparent;
`
