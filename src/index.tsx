import React from 'react'
import ReactDOM from 'react-dom'
import { Website } from './Website'
import * as serviceWorker from './serviceWorker'
import { AuthProvider } from './contexts'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Website />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

if (process.env.NODE_ENV === 'production') serviceWorker.register()
else serviceWorker.unregister()
