import React, { ReactElement, useState, useCallback } from 'react'
import {
  MenuButton,
  DrawerContent,
  Logo,
  Presentation,
  Notifications,
  Container,
  MenuItems,
  MenuItem,
  AuthButton,
  WhatsappContainer,
  WhatsappIcon,
} from './style'
import { ROUTES } from '../routes'
import { Drawer } from '../../../../components'
import { Bell } from './assets/Bell'
import { useLogout, useIsLogged, useLogin } from '../../../../hooks'

export const MobileMenu = (): ReactElement => {
  const isLogged = useIsLogged()
  const login = useLogin()
  const logout = useLogout()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const onLogin = useCallback(() => {
    setIsDrawerOpen(false)
    login()
  }, [setIsDrawerOpen, login])

  const onLogout = useCallback(() => {
    setIsDrawerOpen(false)
    logout()
  }, [setIsDrawerOpen, logout])

  return (
    <Container>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerContent>
          <Logo />
          {isLogged && (
            <Presentation>
              <p>
                Hola, <strong>Daniel</strong>
              </p>
              <Notifications>
                <Bell on={true} />
              </Notifications>
            </Presentation>
          )}
          <MenuItems>
            {ROUTES.filter(({ mobile = false }) => mobile).map(
              ({ name, selected }) => (
                <MenuItem
                  key={name}
                  onClick={() => setIsDrawerOpen(false)}
                  selected={selected}
                >
                  {name}
                </MenuItem>
              ),
            )}
          </MenuItems>
          <WhatsappContainer>
            <p>Contáctanos por whatsapp</p>
            <span>
              <WhatsappIcon />
              +34 653 46 73 60
            </span>
          </WhatsappContainer>
          {isLogged ? (
            <AuthButton onClick={onLogout}>Cerrar sesión</AuthButton>
          ) : (
            <>
              <AuthButton>Register</AuthButton>
              <AuthButton onClick={onLogin}>Login</AuthButton>
            </>
          )}
        </DrawerContent>
      </Drawer>
      <MenuButton onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
    </Container>
  )
}
