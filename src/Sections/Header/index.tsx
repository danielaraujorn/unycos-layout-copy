import React, { ReactElement } from 'react'
import { Container, RightContent, Content, Logo } from './style'
import { DesktopMenu, MobileMenu } from './subcomponents'
import { MaxWidthContainer } from '../../components'

export const Header = (): ReactElement => (
  <MaxWidthContainer>
    <Container>
      <Content />
      <Logo />
      <RightContent>
        <MobileMenu />
        <DesktopMenu />
      </RightContent>
    </Container>
  </MaxWidthContainer>
)
