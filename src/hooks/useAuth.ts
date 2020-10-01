import { useContext } from 'react'
import { AuthContext } from '../contexts'
import { AuthContextType } from '../contexts/AuthContext'

export const useAuth = (): AuthContextType | undefined => {
  const contextValue = useContext(AuthContext)
  return contextValue
}

export const useIsLogged = (): boolean => {
  const contextValue = useAuth()
  return !!contextValue?.token
}

export const useSetToken = (): ((newToken?: string) => void) => {
  const contextValue = useAuth()
  return (newToken?: string) => contextValue?.setAuth?.(newToken)
}

export const useLogin = (): (() => void) => {
  const setToken = useSetToken()
  return () => setToken('token')
}

export const useLogout = (): (() => void) => {
  const setToken = useSetToken()
  return () => setToken()
}
