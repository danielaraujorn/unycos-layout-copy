import React, { ReactElement } from 'react'
import { Container, DrawerPaper } from './style'

export const Drawer = ({
  open,
  onClose,
  children,
}: {
  open: boolean
  children: ReactElement
  onClose: () => void
}): ReactElement => (
  <Container open={open} onClick={onClose}>
    <DrawerPaper onClick={(e) => e.stopPropagation()}>{children}</DrawerPaper>
  </Container>
)
