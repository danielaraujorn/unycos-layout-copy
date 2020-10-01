import { useEffect, useState } from 'react'

type windowSizeType = { height?: number; width?: number }

export const useWindowSize = (): windowSizeType => {
  const getSize = (): windowSizeType => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect((): void | (() => void | undefined) => {
    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return windowSize
}
