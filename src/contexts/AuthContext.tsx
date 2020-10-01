import React, {
  useState,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
} from 'react'
import { useCookies } from 'react-cookie'

export type AuthContextType = {
  token?: string
  setAuth?: (token?: string) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AUTH_COOKIE = 'auth'

export const AuthProvider = ({
  children,
}: {
  children: ReactNode
}): ReactElement => {
  const [cookies, setCookie, removeCookie] = useCookies([AUTH_COOKIE])

  const [authToken, setAuthToken] = useState<string | undefined>(() => {
    const { [AUTH_COOKIE]: token } = cookies || {}
    return token
  })

  const setAuth = useCallback(
    (token?: string) => {
      if (token) setCookie(AUTH_COOKIE, token)
      else removeCookie(AUTH_COOKIE)

      setAuthToken(token)
    },
    [removeCookie, setCookie],
  )

  return (
    <AuthContext.Provider value={{ token: authToken, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
