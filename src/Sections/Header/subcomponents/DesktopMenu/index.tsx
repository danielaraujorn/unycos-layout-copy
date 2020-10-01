import React, { ReactElement, useState, useCallback } from 'react'
import { Popover } from 'react-tiny-popover'
import {
  PopoverPaper,
  ChevronDown,
  MenuItems,
  MenuItem,
  LogoutButton,
  Navbar,
  NavbarItem,
  Container,
} from './style'
import { ROUTES } from '../routes'
import { useLogout, useIsLogged, useLogin } from '../../../../hooks'

export const DesktopMenu = (): ReactElement => {
  const isLogged = useIsLogged()
  const login = useLogin()
  const logout = useLogout()

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const onLogout = useCallback(() => {
    setIsPopoverOpen(false)
    logout()
  }, [setIsPopoverOpen, logout])

  return (
    <Container>
      <Popover
        onClickOutside={() => setIsPopoverOpen(false)}
        isOpen={isLogged && isPopoverOpen}
        positions={['bottom']}
        align="end"
        content={
          <PopoverPaper>
            <div>
              <MenuItems>
                {ROUTES.filter(({ desktop = false }) => desktop).map(
                  ({ name, selected }) => (
                    <MenuItem
                      key={name}
                      selected={selected}
                      onClick={() => setIsPopoverOpen(false)}
                    >
                      {name}
                    </MenuItem>
                  ),
                )}
              </MenuItems>
              <LogoutButton onClick={onLogout}>Cerrar sesión</LogoutButton>
            </div>
          </PopoverPaper>
        }
      >
        <Navbar>
          <NavbarItem>Cursos</NavbarItem>
          {isLogged ? (
            <NavbarItem onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              Hola, <strong>Daniel</strong> <ChevronDown />
            </NavbarItem>
          ) : (
            <>
              <NavbarItem>Register</NavbarItem>
              <NavbarItem onClick={login}>Login</NavbarItem>
            </>
          )}
        </Navbar>
      </Popover>
    </Container>
  )
}
