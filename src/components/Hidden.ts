import { ReactElement } from 'react'
import { useWindowSize } from '../hooks'

type sizesType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const breakpoints = {
  xs: 0,
  sm: 575,
  md: 768,
  lg: 992,
  xl: 1140,
}

export const Hidden = ({
  up,
  down,
  children,
}: {
  up?: sizesType
  down?: sizesType
  children: ReactElement
}): ReactElement | null => {
  const { width } = useWindowSize()
  const maxWidth = up && breakpoints[up]
  const minWidth = down && breakpoints[down]
  if (
    width &&
    ((maxWidth && maxWidth < width) || (minWidth && minWidth > width))
  )
    return null
  return children
}
